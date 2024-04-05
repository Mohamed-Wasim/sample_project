const mongoose = require('mongoose');

const bulkVehicleSchema = new mongoose.Schema({
    vehicleType:{
        type:'String',
        enum: ['Cars', 'Bikes', 'Cycles',"Bus","Auto","Van","Heavy_Vehicle"],
        require:true
    },
    vehicleCount:{
        type:'String',
        enum:["10","20","30","40","50"],
        require:true
    }
},{
    timestamps: true
});

module.exports = mongoose.model('bulkVehicle',bulkVehicleSchema);