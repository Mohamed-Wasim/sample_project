import * as Yup from "yup";

const VehicleSchema = Yup.object().shape({
  vehicleType: Yup.string().required("Vehicle Type is required"),
  vehicleName: Yup.string().required("Vehicle Name is required"),
  vehicleModel: Yup.string().required("Vehicle Model is required"),
  vehicleChk: Yup.string().required("Vehicle In/Out is required"),
});

export default VehicleSchema;
