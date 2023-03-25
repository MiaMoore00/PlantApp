import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import React from "react";
import PlantId from "./pages/PlantID";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Favorites from "./pages/Favorites";
import PlantHealth from './pages/PlantHealth';
import 'bootstrap/dist/css/bootstrap.min.css';



const  App=() =>{
return (
<>
<div id="background">
  <Router>
  
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="login" element={<Login />} />
          <Route path="register" element={<Register />} />
          <Route path="PlantHealth" element={<PlantHealth />} />
          <Route path="PlantID" element={<PlantId />} />
          
        </Routes>
        <Routes>
          <Route path="/favorites" element={<Favorites />} />
        </Routes>
    
    </ Router></div>
    </>
  );
}
export default App;
