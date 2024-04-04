import React from "react";
import image4 from "../../Img/img4.PNG";
import { Container } from "react-bootstrap";

const Analysis = () => {
  return (
    <>
      <Container className="mt-4">
        <h3 style={{ color: "#831238" }}>Analysis</h3>
        <img src={image4} alt="analysis" />
      </Container>
    </>
  );
};

export default Analysis;
