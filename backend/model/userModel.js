const mongoose = require('mongoose');

const vehicleSchema = new mongoose.Schema({
    vehicleType:{
        type:'String',
        enum: ['Car', 'Bike', 'Truck'],
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
        type:'Boolean',
        require:true
    }
},{
    timestamps: true
});

module.exports = mongoose.model('vehicle',vehicleSchema);