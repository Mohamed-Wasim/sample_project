import React from "react";
// import "./styles.css";
import { Form } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

const FormComponent = (props) => {
  return (
    <>
      <Form.Group className="mb-3" controlId="formUsername">
        <Form.Label>{props.label}</Form.Label>
        <Form.Control {...props} className="form-control" />
      </Form.Group>
    </>
  );
};

export default FormComponent;
