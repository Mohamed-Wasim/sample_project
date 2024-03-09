import BikePage from "./Pages/BikePage/BikePage";
import CarPage from "./Pages/CarPage/CarPage";
import VehicleForm from "./Pages/AddVehiclePage/VehicleForm";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
    <BrowserRouter >
      <Routes>
          <Route path="/" element={<VehicleForm />}/>
          <Route path="Bike" element={<BikePage/> } />
          <Route path="Car" element={<CarPage/>} />
      </Routes>
    </BrowserRouter >
    </>
  );
}

export default App;
