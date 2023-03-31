import React from 'react';
import SearchBar from '../Components/SearchBar';
import { Link } from "react-router-dom";
import Footer from '../Components/Footer';
import Logo from '../Logo.png';


function Home({userId}) {
  return (
    <>
 
       <div className="bg-opacity-50  text-center 0 mx-auto max-w-screen-md  rounded-lg  bg-leafgreen h-fit w-fit shadow-xl">
             <img className =' mx-auto max-h-42' src={Logo}/>
              <Link to="/PlantHealth">
        <button className='p-2  rounded-md text-orange-700 '>
        <b>🌱Assess your plant health  </b>

      </button>
      </Link>
     
      <Link to="/PlantID">
        <button className='p-2 mt-3 mx-2 bg-lime-700 rounded-md text-orange-500'>
      <b>🔎 Get more info on your plant </b>
      </button> </Link>

      <Link to="/Favorites">
        <button className='p-2 mt-3 mx-2 bg-lime-700 rounded-md text-orange-500'>
      <b>💚 Favorite Plants </b>
      </button> </Link>


      <div className='searchbarBox mx-auto max-w-screen-md  py-5 px-20'>
      <SearchBar userId= {userId} className ="display flex-auto " placeholder={'Search for your favorite plants!'}/>

      </div>
      <Footer></Footer></div>
        
    </>
  )
}

export default Home
