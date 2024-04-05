import * as Yup from "yup";

const VehicleSchema = Yup.object().shape({
  vehicleType: Yup.string()
    .oneOf(["Bikes", "Cars", "Cycles", "Bus", "Auto", "Van", "Heavy_Vehicle"])
    .required("Vehicle type is required"),
    vehicleCount: Yup.string().oneOf(["10","20","30","40","50"]).required("Vehicle count is required"),
});

export default VehicleSchema;