import React from "react";
import "./style.css";
import { Form } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

const FormComponent = (props) => {
  return (
    <>
      <Form.Group className="mb-3" controlId="formUsername">
        <Form.Label>{props?.label}</Form.Label>
        {props?.isInput ? (
          <>
            <Form.Control
              type={props.type}
              placeholder={props.placeholder}
              name={props.name}
              onChange={props.onChange}
              value={props.value}
              className="form-control InputForm"
            />
            {props.touched && props.error ? (
              <div style={{ color: "red", margin: "5px 0 0 2px" }}>
                {props.error}
              </div>
            ) : null}
          </>
        ) : (
          <>
            <Form.Select
              name={props.name}
              onChange={props.onChange}
              onBlur={props.onBlur}
              value={props.value}
              className={props.touched && props.error ? "InputForm" : ""}
            >
              <option value="">Select</option>
              {props?.options?.map((option, index) => (
                <option key={index} value={option}>
                  {option}
                </option>
              ))}
            </Form.Select>
            {props.touched && props.error ? (
              <div style={{ color: "red", margin: "5px 0 0 2px" }}>
                {props.error}
              </div>
            ) : null}
          </>
        )}
      </Form.Group>
    </>
  );
};

export default FormComponent;
