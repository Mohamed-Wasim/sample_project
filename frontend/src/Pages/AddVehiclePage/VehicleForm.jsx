import React, { useState } from "react";
import "./styles.css";
import FormComponent from "../../Components/FormComponent";
import VehicleSchema from "./VehicleSchema";
import { useFormik } from "formik";
import ButtonComponent from "../../Components/ButtonComponent/Index";
import { Container, Form } from "react-bootstrap";
// import { handleCreate } from "../../Services/index";

const vehicleType = ["Car", "Bike"];
const vehicleModel = {
  car: {
    Kia: ["Kia Seltos GTX"],
  },
  bike: {
    royalEnfield: ["Hunter"],
    Bajaj: ["Bajaj Pulsar NS200", "Bajaj CT 100"],
    Honda: ["Honda Activa", "Honda Shine"],
    Splendor: ["Hero Splendor Plus", "Hero Splendor Plus Xtec"],
    Yamaha: ["FZ-X", "MT-15", "R15"],
  },
};
const isEntry = ["In", "Out"];

const initialValues = {
  vehicleType: vehicleType || [],
  vehicleName: "",
  vehicleModel: vehicleType || [],
  vehicleChk: isEntry || [],
};

const VehicleForm = () => {
  const [vehicleName, setVehicleName] = useState("");

  const validation = useFormik({
    initialValues: initialValues,
    validationSchema: VehicleSchema,
    onSubmit: (values) => {
      console.log(values);
      console.log(validation);
    },
  });

  return (
    <>
      <Container className="addVehicle">
        <h3 className="mt-3">Add Vehicle</h3>
        <div className="Registration_Container">
          <div className="RegistrationUser_container card ">
            <Form onSubmit={validation} className="p-3">
              <FormComponent
                value={validation.values.vehicleType}
                label="Vehicle Type"
                name="vehicleType"
                onChange={validation.handleChange}
                onBlur={validation.handleBlur}
                error={validation.errors.vehicleType}
                required
              />
              <FormComponent
                value={validation.values.vehicleName}
                isInput={true}
                type="text"
                placeholder="Enter the vehicle name"
                label="Vehicle Name"
                name="vehicleName"
                onChange={validation.handleChange}
                onBlur={validation.handleBlur}
                error={validation.errors.vehicleName}
                // required
              />
              <FormComponent
                value={validation.values.vehicleType}
                label="Vehicle Model"
                name="vehicleModel"
                onChange={validation.handleChange}
                onBlur={validation.handleBlur}
                error={validation.errors.vehicleType}
                required
              />
              <FormComponent
                value={validation.values.isEntry}
                label="Vehicle In/Out"
                name="vehicleChk"
                onChange={validation.handleChange}
                onBlur={validation.handleBlur}
                error={validation.errors.isEntry}
                required
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
