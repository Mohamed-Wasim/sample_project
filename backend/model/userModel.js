const mongoose = require('mongoose');

const vehicleSchema = new mongoose.Schema({
    vehicleType:{
        type:'String',
        enum: ['Cars', 'Bikes', 'Cycles',"Bus","Auto","Van","Heavy_Vehicle"],
        require:true
    },
    vehicleName:{
        type:'String',
        require:true
    },
    vehicleModel:{
        type:'String',
        require:true
    },
    vehicleChk :{
        type:'String',
        require:true
    }
},{
    timestamps: true
});

module.exports = mongoose.model('vehicle',vehicleSchema);