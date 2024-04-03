import React from "react";
import { Table, Container } from "react-bootstrap";

const TableComponent = (props) => {
  const { header, TableHeading, tblData } = props;
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
    </>
  );
};

export default TableComponent;
