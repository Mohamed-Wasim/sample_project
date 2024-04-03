import React from "react";
import "./styles.css";
import FormComponent from "../../Components/FormComponent";
import VehicleSchema from "./VehicleSchema";
import { useFormik } from "formik";
import ButtonComponent from "../../Components/ButtonComponent/Index";
import { Container, Form } from "react-bootstrap";
import { handleCreate } from "../../Services/index";
// import SliderComponent from "../../Components/SliderComponent/SliderComponent";

const vehicleType = [
  "Bikes",
  "Cars",
  "Cycles",
  "Bus",
  "Auto",
  "Van",
  "Heavy Vehicle",
];
const vehicleChk = ["In", "Out"];
const vehicleModel = ["hello"];

const data = {
  Cars: {
    Kia: ["Kia Seltos GTX"],
  },
  Bikes: {
    royalEnfield: ["Hunter"],
    Bajaj: ["Bajaj Pulsar NS200", "Bajaj CT 100"],
    Honda: ["Honda Activa", "Honda Shine"],
    Splendor: ["Hero Splendor Plus", "Hero Splendor Plus Xtec"],
    Yamaha: ["FZ-X", "MT-15", "R15"],
  },
};

const initialValues = {
  vehicleType: "",
  vehicleName: "",
  vehicleModel: "",
  vehicleChk: "",
};

const VehicleForm = () => {
  const formik = useFormik({
    initialValues: initialValues,
    validationSchema: VehicleSchema,
    onSubmit: async (values) => {
      handleCreate("/vehicle/create-vehicle", values);
    },
  });

  return (
    <>
      <Container className="addVehicle">
        {/* <SliderComponent /> */}
        <h3 className="mt-3">Add Vehicle</h3>
        <div className="Registration_Container">
          <div className="RegistrationUser_container card ">
            <Form onSubmit={formik.handleSubmit} className="p-3">
              <FormComponent
                isInput={false}
                name="vehicleType"
                label="Vehicle Type"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.vehicleType}
                options={vehicleType}
                touched={formik.touched.vehicleType}
                error={formik.errors.vehicleType}
              />
              <FormComponent
                value={formik.values.vehicleName}
                isInput={true}
                type="text"
                placeholder="Enter the vehicle name"
                label="Vehicle Name"
                name="vehicleName"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                touched={formik.touched.vehicleName}
                error={formik.errors.vehicleName}
              />

              <FormComponent
                isInput={false}
                name="vehicleModel"
                label="vehicle Model"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.vehicleModel}
                options={vehicleModel}
                touched={formik.touched.vehicleModel}
                error={formik.errors.vehicleModel}
              />

              <FormComponent
                isInput={false}
                name="vehicleChk"
                label="Vehicle In/Out"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.vehicleChk}
                options={vehicleChk}
                touched={formik.touched.vehicleChk}
                error={formik.errors.vehicleChk}
              />

              <ButtonComponent label="Add Vehicle" />
            </Form>
          </div>
        </div>
      </Container>
    </>
  );
};

export default VehicleForm;
