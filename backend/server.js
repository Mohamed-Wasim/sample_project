const express = require('express');
const mongoose = require('mongoose');
// const bodyParser = require('body-parser');
const cors = require('cors');
const user = require('./routes/userRoute');

const app = express();

// middle ware
app.use(cors());
app.use(express.json());
app.use('/user',user);

// mongodb connection
const URI = `mongodb://localhost:27017/authentication`
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
