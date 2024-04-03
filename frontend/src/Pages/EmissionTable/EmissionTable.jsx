import React, { useState, useEffect } from "react";
import { Table, Container } from "react-bootstrap";
import { handleRead } from "../../Services";

const header = [
  "Vehicle type",
  "Vehicel counts",
  "Vehicle emissions",
  "Total emission",
];

const EmissionTable = () => {
  const [vehicleData, setVehicleData] = useState();

  const fetchData = async () => {
    const data = await handleRead("/vehicle/get-vehicle");
    setVehicleData(data.data);
  };

  // Function to count vehicleType occurrences
  function countVehicleTypes(arr) {
    return arr?.reduce((acc, obj) => {
      const type = obj.vehicleType;
      acc[type] = (acc[type] || 0) + 1;
      return acc;
    }, {});
  }

  // Count vehicleType occurrences
  const typeCounts = countVehicleTypes(vehicleData);

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <>
      <Container className="addVehicle mt-4">
        <div>
          <h3 style={{ color: "#831238", letterSpacing: "1px" }}>
            EmissionTable
          </h3>
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
            {typeCounts?.Bikes && (
              <tr>
                <td>Bikes</td>
                <td>{typeCounts?.Bikes}</td>
                <td>0.5</td>
                <td>{typeCounts?.Bikes * 0.5}</td>
              </tr>
            )}
            {typeCounts?.Cars && (
              <tr>
                <td>Cars</td>
                <td>{typeCounts?.Cars}</td>
                <td>2.3</td>
                <td>{typeCounts?.Cars * 2.3}</td>
              </tr>
            )}
            {typeCounts?.Cycles && (
              <tr>
                <td>Cycles</td>
                <td>{typeCounts?.Cycles}</td>
                <td>0.1</td>
                <td>{typeCounts?.Cycles * 0.1}</td>
              </tr>
            )}
            {typeCounts?.Bus && (
              <tr>
                <td>Bus</td>
                <td>{typeCounts?.Bus}</td>
                <td>5.7</td>
                <td>{typeCounts?.Bus * 5.7}</td>
              </tr>
            )}
            {typeCounts?.Auto && (
              <tr>
                <td>Auto</td>
                <td>{typeCounts?.Auto}</td>
                <td>1.9</td>
                <td>{typeCounts?.Auto * 1.9}</td>
              </tr>
            )}
            {typeCounts?.Van && (
              <tr>
                <td>Van</td>
                <td>{typeCounts?.Van}</td>
                <td>3.2</td>
                <td>{typeCounts?.Van * 3.2}</td>
              </tr>
            )}
            {typeCounts?.Heavy_Vehicle && (
              <tr>
                <td>Heavy Vehicle</td>
                <td>{typeCounts?.Heavy_Vehicle}</td>
                <td>6.5</td>
                <td>{typeCounts?.Heavy_Vehicle * 6.5}</td>
              </tr>
            )}
          </tbody>
        </Table>
      </Container>
    </>
  );
};

export default EmissionTable;
