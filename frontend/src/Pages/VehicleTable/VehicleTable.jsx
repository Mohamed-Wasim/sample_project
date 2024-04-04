import React, { useState, useEffect } from "react";
import TableComponent from "../../Components/TabelComponent/TabelComponent";
import { handleRead } from "../../Services";
import { Container } from "react-bootstrap";
import { toast } from "react-toastify";

const VehicleTable = () => {
  const [vehicleData, setVehicleData] = useState();
  const header = [
    "Vehicle type",
    "Vehicle name",
    "vehicle model",
    "Vehicle in/out",
  ];

  const fetchData = async () => {
    const data = await handleRead("/vehicle/get-vehicle");
    if (data.message === "No vehicle exists") {
      // alert(data.message);
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
      <Container>
        <TableComponent
          header={header}
          tblData={vehicleData}
          TableHeading="Vehicle in/out"
        />
        {/* </div> */}
      </Container>
    </>
  );
};

export default VehicleTable;
