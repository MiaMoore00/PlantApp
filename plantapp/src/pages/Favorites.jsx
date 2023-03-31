import React from 'react';
import './Favorites.css'
import Footer from '../Components/Footer';
import { Link } from "react-router-dom";

function Favorites() {
  return (
    <>
    <div className="bg-opacity-80 display flex-auto text-center border-solid border-4  border-orange-500 mx-auto max-w-screen-md  rounded-lg bg-leafgreen h-fit shadow-xl">
        <Link to="/PlantID">
          <button className='p-2 mt-3 mx-2  bg-lime-700 rounded-lg text-orange-500 '>
            <b>🔎Identify Your Plant</b>
            </button>
        </Link>
      
        <Link to="/">
          <button className='p-2 mt-3 mx-2 bg-lime-700 rounded-md text-orange-500 '>
            <b> 🏠Home </b>
          </button>
        </Link>

        <Link to="/PlantHealth">
          <button className='p-2 mt-3 mx-2 bg-lime-700 rounded-md text-orange-500 '>
            <b>🌱 Assess your plant health  </b>
          </button>
        </Link>
            
        <h1 className='text-3xl text-[#3f6212]'>Favorite Plants💚</h1>
            
            
           
        <Footer/>
   </div>
  
        </>
  )
}

export default Favorites