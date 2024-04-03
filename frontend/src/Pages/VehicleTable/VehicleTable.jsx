import React, { useState, useEffect } from "react";
import TableComponent from "../../Components/TabelComponent/TabelComponent";
import { handleRead } from "../../Services";

const VehicleTable = () => {
  const [vehicleData, setVehicleData] = useState();
  const header = [
    "Vehicle Type",
    "Vehicle Name",
    "vehicle Model",
    "Vehicle In/Out",
  ];

  const fetchData = async () => {
    const data = await handleRead("/vehicle/get-vehicle");
    setVehicleData(data.data);
  };

  useEffect(() => {
    fetchData();
  }, []);
  return (
    <>
      <TableComponent header={header} tblData={vehicleData} />
    </>
  );
};

export default VehicleTable;
