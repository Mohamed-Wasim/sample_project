import React from "react";
import { Nav, Container, Navbar } from "react-bootstrap";
import { NavLink, Outlet } from "react-router-dom";

const NavLayout = () => {
  return (
    <>
      <Navbar style={{ backgroundColor: "#831238" }} variant="dark">
        <Container>
          <Navbar.Brand href="#home" style={{ letterSpacing: "2px" }}>
            VEHICLES
          </Navbar.Brand>
          <Nav className="ms-auto">
            <Nav.Link
              as={NavLink}
              to="/"
              exact
              style={{ letterSpacing: "1px" }}
            >
              Home
            </Nav.Link>
            <Nav.Link
              as={NavLink}
              to="VehicleForm"
              style={{ letterSpacing: "1px" }}
              exact
            >
              AddVehicle
            </Nav.Link>
            <Nav.Link
              as={NavLink}
              to="VehicleTable"
              style={{ letterSpacing: "1px" }}
            >
              Vehicles
            </Nav.Link>
            <Nav.Link
              as={NavLink}
              to="emission"
              style={{ letterSpacing: "1px" }}
            >
              EmissionTable
            </Nav.Link>
            <Nav.Link
              as={NavLink}
              to="analysis"
              style={{ letterSpacing: "1px" }}
            >
              Analysis
            </Nav.Link>
          </Nav>
        </Container>
      </Navbar>
      <Outlet />
    </>
  );
};

export default NavLayout;
