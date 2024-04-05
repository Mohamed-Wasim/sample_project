const express = require('express');
const vehicleController = require('../controller/vehicleController');
const router = express.Router();

router.post('/create-vehicle',vehicleController.createVehicle);
router.get('/get-vehicle',vehicleController.getVehicle);
router.post('/createBulk-vehicle',vehicleController.createBulkVehicle);
router.get('/getBulk-vehicle',vehicleController.getBulkVehicle);



module.exports = router;