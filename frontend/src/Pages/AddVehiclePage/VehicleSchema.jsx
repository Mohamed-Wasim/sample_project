import * as Yup from "yup";

const VehicleSchema = Yup.object().shape({
  vehicleType: Yup.string()
    .oneOf(["Bikes", "Cars", "Cycles", "Bus", "Auto", "Van", "Heavy_Vehicle"])
    .required("Vehicle type is required"),
  vehicleName: Yup.string().required("Vehicle name is required"),
  vehicleModel: Yup.string().required("Vehicle model is required"),
  vehicleChk: Yup.string()
    .oneOf(["In", "Out"])
    .required("Vehicle in/out is required"),
});

export default VehicleSchema;
