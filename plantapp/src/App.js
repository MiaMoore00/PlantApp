import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
<<<<<<< HEAD
import React from "react";
import PlantId from "./pages/PlantID";
=======
import {React, useState} from "react";
import PlantId from "./PlantID";
>>>>>>> main
import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Favorites from "./pages/Favorites";
import PlantHealth from './pages/PlantHealth';
import 'bootstrap/dist/css/bootstrap.min.css';



const  App=() =>{
  const [userId, setUserId] = useState(null);
  console.log(userId);
return (
<>
<div id="background">
  <Router>
  
        <Routes>
          <Route path="/" element={<Home userId={userId} />} />
          <Route path="login" element={<Login setUserId={setUserId} />} />
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
