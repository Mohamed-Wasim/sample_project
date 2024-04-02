import React from "react";
// import "./styles.css";
import { Form } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

const FormComponent = (props) => {
  return (
    <>
      <Form.Group className="mb-3" controlId="formUsername">
        <Form.Label>{props?.label}</Form.Label>
        {props?.isInput ? (
          <Form.Control {...props} className="form-control" />
        ) : (
          <Form.Select aria-label="Default select example">
            <option>Select</option>
            {props?.value?.map((data, index) => (
              <option value={data} key={index}>
                {data}
              </option>
            ))}
            {props?.error && <span>{props?.error}</span>}
          </Form.Select>
        )}
      </Form.Group>
    </>
  );
};

export default FormComponent;
