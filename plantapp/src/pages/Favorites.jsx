import {React, useState } from 'react';
import './Favorites.css'
import Footer from '../Components/Footer';
import { Link } from "react-router-dom";
import { useMemo } from 'react';



const Favorites=({userId}) => {

  const [favoritesList, setFavoritesList] = useState([]);

  const handleFavorites = async () => {

    try {
      const response = await fetch("http://localhost:3001/api/favoritesList", {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          id : userId
        },
      });
      const data = await response.json();
      if (response.ok) {
        setFavoritesList(data);
        console.log(data);
      } else {
        // Display error message to user
      }
    } catch (error) {
      console.log(error);
    }
  };
// fetch(`test${e}.com`)
  // const plantData = () =>{
  //   favoritesList.map(e => {
  //     const response = await fetch 
      // fetch the URL with the plant ID to fetch. WHen it asks for the ID instead: id{e}
  //       method: "GET",
  //     console.log(e);
  //   })
  // }
console.log(favoritesList);

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
            
        <h1 className='text-3xl pt-2 text-[#3f6212]'>Favorite Plants!</h1>

        <button onClick={handleFavorites}>show favorites</button>
        <button onClick={plantData}>Display plant info</button>
        <div className='card'>




        </div>
            
            
      <div class="min-h-screen">
        <div className="sticky top-[100vh]"><Footer/></div>
      </div>
        
   </div>
  
        </>
  )
}

export default Favorites