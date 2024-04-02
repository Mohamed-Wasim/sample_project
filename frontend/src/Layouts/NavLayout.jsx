import React from "react";
import { Nav, Container, Navbar } from "react-bootstrap";
import { NavLink, Outlet } from "react-router-dom";

const NavLayout = () => {
  return (
    <>
      <Navbar bg="primary" variant="dark">
        <Container>
          <Navbar.Brand href="#home">Vehicle</Navbar.Brand>
          <Nav className="ms-auto">
            <Nav.Link as={NavLink} to="/" exact>
              Add Vehicle
            </Nav.Link>
            <Nav.Link as={NavLink} to="/Bike">
              Bike
            </Nav.Link>
            <Nav.Link as={NavLink} to="/Car">
              Car
            </Nav.Link>
          </Nav>
        </Container>
      </Navbar>
      <Outlet />
    </>
  );
};

export default NavLayout;
