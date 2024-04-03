import React from "react";
import image from "../../Img/analysis.pdf";
import { Container } from "react-bootstrap";

const Analysis = () => {
  return (
    <>
      <Container className="mt-4">
        <h3 style={{ color: "#831238" }}>Analysis</h3>
        <img src={image} alt="analysis" />
      </Container>
    </>
  );
};

export default Analysis;
