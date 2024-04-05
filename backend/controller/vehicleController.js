const userModel = require('../model/userModel');
const bulkVehicleModel = require('../model/bulkVehicleModel');

// create vehicle
const createVehicle = async (req,res) => {
    try{
        const oVehicleReq = req.body;

        // check the exist vehicleDetails
        // const existVehicleDtls = await userModel.findOne(oVehicleReq);
        // if(existVehicleDtls){
        //     return res.status(400).json({message:`this vehicle details is already exists`});
        // }

        // Create vehicle
        const newVehicle = new userModel(oVehicleReq);
        // save the vehicle to dataBase
        await newVehicle.save();
        return res.status(200).json({message:`vehicle register successfully`});

    }catch(error){
        console.log(error.message)
        return res.status(500).json({error:`Internal server error ${error.message}`});
    }
}

// get vehicle
const getVehicle = async (req,res)=>{
    try{
        // get the vehicle details
        const getVehicleDtls = await userModel.find({});
        if(getVehicleDtls <= 0){
            return res.status(200).json({message:`No vehicle exists`});
        }

        return res.status(200).json({count:getVehicleDtls.length,data:getVehicleDtls});

    }catch(error){
        return res.status(500).json({error:`Inter server error ${error}`});
    }
};

// create bulk vehicle
const createBulkVehicle = async (req,res) => {
    try{
        const oVehicleReq = req.body;

        // Create vehicle
        const newVehicle = new bulkVehicleModel(oVehicleReq);
        // save the vehicle to dataBase
        await newVehicle.save();
        return res.status(200).json({message:`bulk vehicle saved successfully`});

    }catch(error){
        console.log(error.message)
        return res.status(500).json({error:`Internal server error ${error.message}`});
    }
}


// get bulk vehicle
const getBulkVehicle = async (req,res)=>{
    try{
        // get the vehicle details
        const getVehicleDtls = await bulkVehicleModel.find({});
        if(getVehicleDtls <= 0){
            return res.status(200).json({message:`No vehicle exists`});
        }

        return res.status(200).json({count:getVehicleDtls.length,data:getVehicleDtls});

    }catch(error){
        return res.status(500).json({error:`Inter server error ${error}`});
    }
};

module.exports = { createVehicle, getVehicle, createBulkVehicle, getBulkVehicle };