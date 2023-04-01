import { React, useState, useEffect } from 'react';
import './Favorites.css'
import Footer from '../Components/Footer';
import { Link } from "react-router-dom";
import { useMemo } from 'react';
import videoBg from "../assets/video8.mp4"


const Favorites = ({ userId = 1 }) => {
  const [favoritesList, setFavoritesList] = useState([]);
  useEffect(() => {
    const handleFavorites = async () => {

      try {
        const response = await fetch("http://localhost:3001/api/favoritesList", {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
            id: 1
          },
        });
        const data = await response.json();
        if (response.ok) {
          console.log(data);
          setFavoritesList(data);
        } else {
          // Display error message to user
        }
      } catch (error) {
        console.log(error);
      }
    };



handleFavorites();
  
    
  }, [])

  
  return (
    <>

  


      

    <div className="main ">
        <video src ={videoBg} autoPlay loop muted className='fixed w-screen left-1/2 top-1/2 h-screen object-cover -translate-y-1/2 -translate-x-1/2 -z-10'/>
    <div className="bg-opacity-70 display flex-auto text-center  mx-auto max-w-screen-md  rounded-lg bg-leafgreen h-fit shadow-xl">

        <Link to="/PlantID">
          <button className='p-2 mt-3 mx-2 bg-green-900 rounded-md text-orange-400'>
            <b>🔎Identify Your Plant</b>
          </button>
        </Link>

        <Link to="/Home">
          <button className='p-2 mt-3 mx-2 bg-green-900 rounded-md text-orange-400'>
            <b> 🏠Home </b>
          </button>
        </Link>

        <Link to="/PlantHealth">
          <button className='p-2 mt-3 mx-2 bg-green-900 rounded-md text-orange-400 '>
            <b>🌱 Assess your plant health  </b>
          </button>
        </Link>

        <h1 className='text-3xl pt-2 text-[#3f6212]'>Favorite Plants!</h1>


        <div className='card'>
        {
        favoritesList.map( favorite =>{
          return (
            <>

        <div className="card bg-transparent text-white rounded-full">
           <div class="card-img" key={favorite.id}> {favorite.default_image?<img className="rounded-lg" src={favorite.default_image.medium_url} alt="favorite"></img>:null} </div>
          <div class="card-body">
              <div className="card-title uppercase"><h4>{favorite.common_name}  </h4></div> 
              <b> ☀️Sunlight: </b> {favorite.sunlight}<br />
               <b> 🧬Scientific Name: </b>{favorite.scientific_name} <br />
               <b>💦 Watering: </b> {favorite.watering} 
              </div></div>


            
            </>
          )
        })   
    }
        </div>


        <div class="min-h-screen">
          <div className="sticky top-[100vh]"><Footer /></div>
        </div>

      </div>


    

        
   </div>
  
        </>

  )
}

export default Favorites; 