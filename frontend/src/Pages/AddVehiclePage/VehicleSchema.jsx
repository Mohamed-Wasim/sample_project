import * as Yup from "yup";

const VehicleSchema = Yup.object().shape({
  vehicleType: Yup.string()
    .oneOf(["Cars", "Bikes"])
    .required("Vehicle Type is required"),
  vehicleName: Yup.string().required("Vehicle Name is required"),
  vehicleModel: Yup.string()
    .oneOf(["hello"])
    .required("Vehicle Model is required"),
  vehicleChk: Yup.string()
    .oneOf(["In", "Out"])
    .required("Vehicle In/Out is required"),
});

export default VehicleSchema;
