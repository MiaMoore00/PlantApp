import React from 'react';
import './Favorites.css'
import Footer from '../Components/Footer';
import { Link } from "react-router-dom";
import { useMemo } from 'react';

const Favorites=({favoritePlant, plantName}) => {
  console.log(favoritePlant);
  const savedFavorites = useMemo(() => {
    return Array.from(favoritePlant).map(favorites => {
      console.log(favorites);
      return(
       <div className="favorites-preview" key={favorites.id}>
        <Link to={`/api/favoritesList`}>
          <h2>{favoritePlant.plantName}</h2>
        </Link>
       </div>
    )
    })
  }, [favoritePlant])
  console.log(savedFavorites);
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
<h2>{plantName}</h2>
        {savedFavorites}
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