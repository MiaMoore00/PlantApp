import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import React from "react";
import PlantId from "./PlantID";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";
import PlantHealth from './PlantHealth';
import InsectId from "./InsectID";


function App() {
  return (
    <div className="App">

  
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>

  <PlantId /> 
<PlantHealth />
<InsectId />
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
