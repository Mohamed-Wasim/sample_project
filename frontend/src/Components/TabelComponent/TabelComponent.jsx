import React from "react";
import { Table, Container } from "react-bootstrap";

const TableComponent = (props) => {
  const { header, TableHeading, tblData } = props;
  return (
    <div style={{ padding: "none" }}>
      <Container className="addVehicle mt-4">
        <div>
          <h3 style={{ color: "#831238" }}>{TableHeading}</h3>
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
            {tblData?.map((vehicle, index) => {
              return (
                <tr key={index}>
                  <td>{vehicle?.vehicleType}</td>
                  <td>{vehicle?.vehicleName}</td>
                  <td>{vehicle?.vehicleModel}</td>
                  <td>{vehicle?.vehicleChk}</td>
                </tr>
              );
            })}
          </tbody>
        </Table>
      </Container>
    </div>
  );
};

export default TableComponent;
