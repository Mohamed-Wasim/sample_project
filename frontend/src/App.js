import BikePage from "./Pages/BikePage/BikePage";
import CarPage from "./Pages/CarPage/CarPage";
import VehicleForm from "./Pages/AddVehiclePage/VehicleForm";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import NavLayout from "./Layouts/NavLayout";

function App() {
  return (
    <>
    <BrowserRouter >
      <Routes>
        <Route path="/" element={<NavLayout/>}>
          <Route index element={<VehicleForm />}/>
          <Route path="Bike" element={<BikePage/> } />
          <Route path="Car" element={<CarPage/>} />
        </Route>
      </Routes>
    </BrowserRouter >
    </>
  );
}

export default App;
