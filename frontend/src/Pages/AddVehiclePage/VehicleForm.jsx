import React, { useState } from "react";
import "./styles.css";
import FormComponent from "../../Components/FormComponent";
// import vehicleSchema from "./vehicleSchema";
import ButtonComponent from "../../Components/ButtonComponent/Index";
import { Container, Form } from "react-bootstrap";
// import { handleCreate } from "../../Services/index";
import NavLayout from "../../Layouts/NavLayout";

const VehicleForm = () => {
  const [vehicleName, setVehicleName] = useState("");
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

  // handle submit
  const handleVehicleSubmit = () => {};

  // handleChance
  const handleChange = (e) => {};

  return (
    <>
      <NavLayout />
      <Container className="addVehicle">
        <h3 className="mt-3">Add Vehicle</h3>
        <div className="Registration_Container">
          <div className="RegistrationUser_container card ">
            <Form onSubmit={handleVehicleSubmit} className="p-3">
              <FormComponent
                data={vehicleType}
                label="Vehicle Type"
                name="username"
                onChange={(e) => handleChange(e)}
                required
              />
              <FormComponent
                value={vehicleName}
                isInput={true}
                type="text"
                placeholder="Enter the vehicle name"
                label="Vehicle Name"
                name="vehicleName"
                onChange={(e) => setVehicleName(e.target.value)}
                required
              />
              <FormComponent
                data={vehicleType}
                label="Vehicle Model"
                name="password"
                onChange={(e) => handleChange(e)}
                required
              />
              <FormComponent
                data={isEntry}
                label="Vehicle In/Out"
                name="vehicleChk"
                onChange={(e) => handleChange(e)}
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
