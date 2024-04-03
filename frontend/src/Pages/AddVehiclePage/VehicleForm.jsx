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
  "Heavy_Vehicle",
];
const vehicleChk = ["In", "Out"];
const vehicleModel = ["hello"];

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
    onSubmit: async (values, { resetForm }) => {
      await handleCreate("/vehicle/create-vehicle", values);
      resetForm();
    },
  });

  return (
    <>
      <Container className="addVehicle">
        {/* <SliderComponent /> */}
        <h3 className="mt-3" style={{ color: "#831238" }}>
          Add vehicle
        </h3>
        <div className="Registration_Container">
          <div className="RegistrationUser_container card ">
            <Form onSubmit={formik.handleSubmit} className="p-3">
              <FormComponent
                isInput={false}
                name="vehicleType"
                label="Vehicle type"
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
                label="Vehicle name"
                name="vehicleName"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                touched={formik.touched.vehicleName}
                error={formik.errors.vehicleName}
              />

              <FormComponent
                isInput={true}
                type="text"
                placeholder="Enter the vehicle Model"
                name="vehicleModel"
                label="vehicle model"
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
                label="Vehicle in/out"
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
