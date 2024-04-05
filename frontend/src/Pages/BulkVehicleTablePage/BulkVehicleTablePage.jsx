import React, { useState, useEffect } from "react";
import { Table, Container } from "react-bootstrap";
import { handleRead } from "../../Services";
import { toast } from "react-toastify";

const BulkVehicleTablePage = () => {
  const [vehicleData, setVehicleData] = useState();

  const header = ["Vehicle type", "Vehicle count"];

  const fetchData = async () => {
    const data = await handleRead("/vehicle/getBulk-vehicle");
    if (data.message === "No vehicle exists") {
      toast.error(data.message);
    } else {
      setVehicleData(data.data);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <>
      <Container className="mt-4">
        <div>
          <h3 style={{ color: "#831238" }}>Bulk vehicle details</h3>
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
            {vehicleData?.map((vehicle, index) => {
              return (
                <tr key={index}>
                  <td>{vehicle?.vehicleType}</td>
                  <td>{vehicle?.vehicleCount}</td>
                </tr>
              );
            })}
          </tbody>
        </Table>
      </Container>
    </>
  );
};

export default BulkVehicleTablePage;
