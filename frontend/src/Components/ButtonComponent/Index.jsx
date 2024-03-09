import React from "react";
import { Button } from "react-bootstrap";

const ButtonComponent = (props) => {
  return (
    <>
      <Button variant="primary" type="submit" style={{ width: "100%" }}>
        {props.label}
      </Button>
    </>
  );
};

export default ButtonComponent;
