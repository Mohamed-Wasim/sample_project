import React from "react";
import SliderComponent from "../../Components/SliderComponent/SliderComponent";
import { Container } from "react-bootstrap";
import FooterComponent from "../../Components/FooterComponent/FooterComponent";

const Home = () => {
  return (
    <>
      <SliderComponent />
      <Container className="p-5">
        <h3 className="mt-3">About</h3>
        <p>
          The Vehicle Emissions Analyzer and Check-In/Check-Out Analysis website
          offers a comprehensive platform for monitoring and assessing vehicle
          emissions, facilitating environmentally responsible decision-making by
          providing detailed vehicle check-ins and emissions data.
        </p>
      </Container>
      <FooterComponent />
    </>
  );
};

export default Home;
