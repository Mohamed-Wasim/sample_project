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
// const URI = `mongodb://localhost:27017/authentication`
const URI ="mongodb+srv://mohamedwasimdesigner:wAjxkf6ol1s457we@cluster0.anosq0k.mongodb.net/"

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
