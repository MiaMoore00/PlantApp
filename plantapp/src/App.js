import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import {React, useState} from "react";
import PlantId from "./pages/PlantID";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Favorites from "./pages/Favorites";
import PlantHealth from './pages/PlantHealth';
import 'bootstrap/dist/css/bootstrap.min.css';


// add authentication that checks if the user is logged in. 
// make sure user can't access protected pages if not logged in.
import videoBg from "./assets/video2.mp4"



const  App=() =>{
  const [userId, setUserId] = useState(null);
  console.log(userId);
return (
<>
<div className="main ">
  <video src ={videoBg} autoPlay loop muted  
  style = {{
    position:"fixed",
    width:"100vw",
    left:"50%",
    top:"50%",
    height:"100vh",
    objectFit:"cover",
    transform:"translate(-50%,-50%)",
    zIndex:"-1"
  }}
    
    
    
    />
  

  <Router>
  
        <Routes>
          <Route path="/" element={<Login setUserId={setUserId} />} />
          <Route path="Home" element={<Home userId={userId} />} />
          <Route path="register" element={<Register />} />
          <Route path="PlantHealth" element={<PlantHealth />} />
          <Route path="PlantID" element={<PlantId userId={userId}/>} />
          
        </Routes>
        <Routes>
          <Route path="/favorites" element={<Favorites userId={userId}/>} />
        </Routes>
    
    </ Router>
    </div>
    
    </>
  );
}
export default App;
