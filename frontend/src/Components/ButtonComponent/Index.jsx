import React from "react";
import { Button } from "react-bootstrap";

const ButtonComponent = (props) => {
  return (
    <>
      <Button
        type="submit"
        style={{ width: "100%", backgroundColor: "#831238", border: "none" }}
      >
        {props.label}
      </Button>
    </>
  );
};

export default ButtonComponent;
