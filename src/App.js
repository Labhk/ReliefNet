import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import MainPage from "./components/MainPage";

function App() {
  return (
    <React.Fragment>
      <BrowserRouter>
        <Routes>
        <Route path="/" element={<MainPage />} />

        </Routes>
      </BrowserRouter>
    </React.Fragment>
  );
}

export default App;