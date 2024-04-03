import React from "react";
import { Container, Row, Col } from "react-bootstrap";

const FooterComponent = () => {
  return (
    <footer className="footer mt-auto py-3 bg-dark text-light">
      <Container className="mt-5">
        <Row>
          <Col sm={12} md={4}>
            <h5>About Us</h5>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </Col>
          <Col sm={12} md={4}>
            <h5>Contact Us</h5>
            <ul className="list-unstyled">
              <li>Email: example@example.com</li>
              <li>Phone: (123) 456-7890</li>
            </ul>
          </Col>
          <Col sm={12} md={4}>
            <h5>Follow Us</h5>
            <ul className="list-unstyled">
              <li>Facebook</li>
              <li>Twitter</li>
              <li>Instagram</li>
            </ul>
          </Col>
        </Row>
        <Row>
          <Col className="text-center py-3">© 2024 Your Company</Col>
        </Row>
      </Container>
    </footer>
  );
};

export default FooterComponent;
