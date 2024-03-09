import React from "react";
import { Nav, Container, Navbar } from "react-bootstrap";
import { NavLink, Outlet } from "react-router-dom";

const NavLayout = () => {
  return (
    <>
      <Navbar bg="primary" data-bs-theme="dark">
        <Container>
          <Navbar.Brand href="#home">Vehicle</Navbar.Brand>
          <Nav className="ms-auto">
            <NavLink to="/">Add Vehicle</NavLink>
            <NavLink to="Bike">Bike</NavLink>
            <NavLink to="Car">Car</NavLink>
            <Outlet />
          </Nav>
        </Container>
      </Navbar>
    </>
  );
};

export default NavLayout;
