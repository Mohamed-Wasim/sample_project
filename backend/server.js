const express = require('express');
const mongoose = require('mongoose');
// const bodyParser = require('body-parser');
const cors = require('cors');
const vehicleRoute = require('./routes/vehicleRoutes');

const app = express();

// middle ware
app.use(cors());
app.use(express.json());
app.use('/vehicle',vehicleRoute);

// mongodb connection
// mohamedwasimdesigner
// wAjxkf6ol1s457we
// wAjxkf6ol1s457we
// mohamedwasimdesigner
// hkfYhfzctFAyEU1C
// const URI = `mongodb://localhost:27017/authentication`
// const URI ="mongodb+srv://mohamedwasimdesigner:wAjxkf6ol1s457we@cluster0.anosq0k.mongodb.net/"
// const URI ="mongodb+srv://mohamedwasimdesigner:hkfYhfzctFAyEU1C@cluster0.kqvkmbf.mongodb.net/"
const URI = "mongodb+srv://user2000:test1234@cluster0.kqvkmbf.mongodb.net/"

mongoose
.connect(URI)
.then(()=>{
  console.log(`mongoDB connected successfully`);

    // server connection
  const PORT = '8080';
	app.listen(PORT,()=>{
  console.log(`server connected successfully on port ${PORT}`);
})

})
.catch((error)=>{
	console.error(error);
})
