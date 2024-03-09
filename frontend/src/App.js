import LoginPage from "./Pages/LoginPage";
import RegistrationPage from "./Pages/RegistrationPage";
// import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from "react-router-dom";
import { BrowserRouter, Routes, Route } from "react-router-dom";


// const router =  createBrowserRouter(
//   createRoutesFromElements(
//     <Route path="/register" element={<RegistrationPage/>} />,
//     <Route path="/login" element={<LoginPage/>} />
//   )
// )

function App() {
  return (
    <>
    {/* <RegistrationPage /> */}
    {/* <RouterProvider router={router} /> */}
    <BrowserRouter >
      <Routes>
        <Route path="/" element={<RegistrationPage />} />
        <Route path="/login" element={<LoginPage />} />
      </Routes>
    </BrowserRouter >
    </>
  );
}

export default App;
