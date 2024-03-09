const express = require('express');
const vehicleController = require('../controller/vehicleController');
const router = express.Router();

router.post('/create-vehicle',vehicleController.createVehicle);
router.get('/get-vehicle',vehicleController.getVehicle);

module.exports = router;