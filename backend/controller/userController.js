const userModel = require('../model/userModel');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

// register user
const registration = async (req,res) => {
    try{
        const {username, email, password } = req.body;

        // check the exist user
        const existUser = await userModel.findOne({email});
        if(existUser){
            return res.status(400).json({message:`user already exists`});
        }

        // hash the password
        const hashedPassword = await bcrypt.hash(password,10);

        // Create user
        const newUser = new userModel({
            username,
            email,
            password:hashedPassword
        });
        // save the user to dataBase
        await newUser.save();
        return res.status(200).json({message:`user register successfully`});

    }catch(error){
        console.log(error.message)
        return res.status(500).json({error:`Internal server error ${error.message}`});
    }
}

// login user
const login = async (req,res)=>{
    try{
        const {email,password} = req.body;

        // check the user exits
        const existUser = await userModel.findOne({email});
        if(!existUser){
            return res.status(400).json({message:`No user exists`});
        }

        // check the password
        const isPasswordValid = await bcrypt.compare(password, existUser.password);
        if(!isPasswordValid){
            return res.status(400).json({message:`Incorrect password`});
        }

        // generate the jwt token
        const userToken = jwt.sign({userId:existUser._id},`your_secret_key`,{expiresIn:`1hr`});
        return res.status(200).json({userToken,userId:existUser._id});


    }catch(error){
        return res.status(500).json({error:`Inter server error ${error}`});
    }
};

module.exports = { registration, login };