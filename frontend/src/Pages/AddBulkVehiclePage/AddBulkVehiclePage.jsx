import React from "react";
// import "./styles.css";
import FormComponent from "../../Components/FormComponent";
import AddBulkVehicleSchema from "./AddBulkVehicleSchema";
import { useFormik } from "formik";
import ButtonComponent from "../../Components/ButtonComponent/Index";
import { Container, Form } from "react-bootstrap";
import { handleCreate } from "../../Services/index";
import { toast } from "react-toastify";

const vehicleType = [
  "Bikes",
  "Cars",
  "Cycles",
  "Bus",
  "Auto",
  "Van",
  "Heavy_Vehicle",
];
const vehicleCount = ["10", "20", "30", "40", "50"];

const initialValues = {
  vehicleType: "",
  vehicleCount: "",
};

const AddBulkVehiclePage = () => {
  const formik = useFormik({
    initialValues: initialValues,
    validationSchema: AddBulkVehicleSchema,
    onSubmit: async (values, { resetForm }) => {
      await handleCreate("/vehicle/createBulk-vehicle", values);
      resetForm();
      toast.success("saved successfully");
    },
  });

  return (
    <>
      <Container className="addVehicle">
        <h3 className="mt-3" style={{ color: "#831238" }}>
          Add bulk vehicle
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
                isInput={false}
                name="vehicleCount"
                label="Vehicle count"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.vehicleCount}
                options={vehicleCount}
                touched={formik.touched.vehicleCount}
                error={formik.errors.vehicleCount}
              />

              <ButtonComponent label="Add Bulk Vehicle" />
            </Form>
          </div>
        </div>
      </Container>
    </>
  );
};

export default AddBulkVehiclePage;
