import VehicleForm from "./Pages/AddVehiclePage/VehicleForm";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import NavLayout from "./Layouts/NavLayout";
import VehicleTable from "./Pages/VehicleTable/VehicleTable";
import EmissionTable from "./Pages/EmissionTable/EmissionTable";
import Home from "./Pages/HomePage/Home";
import Analysis from "./Pages/AnalysisPage/Analysis";

function App() {
  return (
    <>
    <BrowserRouter >
      <Routes>
        <Route path="/" element={<NavLayout/>}>
          <Route index element={<Home />}/>
          <Route path="VehicleForm" element={<VehicleForm />}/>
          <Route path="VehicleTable" element={<VehicleTable/>}/>
          <Route path="emission" element={<EmissionTable/>} />
          <Route path="analysis" element={<Analysis/>} /> 
        </Route>
      </Routes>
    </BrowserRouter >
    </>
  );
}

export default App;
