import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import MainPage from "./components/Home/MainPage";
import Login from "./components/Login/Login";
import Verify from "./components/Login/Verify";
import Suppliers from "./components/Supply/Suppliers";
import AddSuppliers from "./components/Supply/addSuppliers";
import SendRequest from "./components/Supply/sendRequest";

function App() {
  return (
    <React.Fragment>
      <BrowserRouter>
        <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/login" element={<Login/>} />
        <Route path="/verify" element={<Verify/>} />
        <Route path="/send" element={<SendRequest/>} />
        <Route path="/suppliers" element={<Suppliers/>} />
        <Route path="/add" element={<AddSuppliers/>} />
        </Routes>
      </BrowserRouter>
    </React.Fragment>
  );
}

export default App;