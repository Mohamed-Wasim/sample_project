import React from "react";
import { Table, Container } from "react-bootstrap";

const aVehicle = [
  "BIKES",
  "CARS",
  "CYCLES",
  "BUS",
  "AUTO",
  "VAN",
  "HEAVY VEHICLE",
];

const TableComponent = (props) => {
  const { header, TableHeading } = props;
  return (
    <>
      <Container className="addVehicle">
        <div>
          <h3>{TableHeading}</h3>
        </div>
        <Table striped bordered hover>
          <thead>
            <tr>
              {header?.map((header) => {
                return <th>{header}</th>;
              })}
            </tr>
          </thead>
          <tbody>
            {aVehicle?.map((vehicle) => {
              return (
                <tr>
                  <th>{vehicle}</th>
                </tr>
              );
            })}
          </tbody>
        </Table>
      </Container>
    </>
  );
};

export default TableComponent;
