import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import React from "react";
import PlantId from "./PlantID";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";
import PlantHealth from './PlantHealth';

function App() {
  return (
    <div className="App">
<PlantId /> 
<PlantHealth />
      <PlantId />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
        <Routes>
          <Route path="login" element={<Login />} />
        </Routes>
        <Routes>
          <Route path="register" element={<Register />} />
        </Routes>
</ BrowserRouter>
    </div>
  );
}

export default App;
