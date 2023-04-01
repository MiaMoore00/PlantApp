import React from 'react';
import SearchBar from '../Components/SearchBar';
import { Link } from "react-router-dom";
import Footer from '../Components/Footer';
import Logo from '../Logo.png';
import videoBg from "../assets/video.mp4"



function Home({userId}) {
  return (
    <>
    <div className="main ">
  <video src ={videoBg} autoPlay loop muted className='fixed w-screen left-1/2 top-1/2 h-screen object-cover -translate-y-1/2 -translate-x-1/2 -z-10'/>
  

  
  
 
       <div className="bg-opacity-70  text-center 0 mx-auto max-w-screen-md  rounded-lg  bg-leafgreen h-fit w-fit shadow-xl">
             <img className =' mx-auto max-h-42' src={Logo}/>
              <Link to="/PlantHealth">
        <button className='p-2 mt-3 mx-2 bg-green-900 rounded-md text-orange-400'>
        <b>🌱Assess your plant health  </b>

      </button>
      </Link>
     
      <Link to="/PlantID">
        <button className='p-2 mt-3 mx-2 bg-green-900 rounded-md text-orange-400'>
      <b>🔎 Get more info on your plant </b>
      </button> </Link>

      <Link to="/Favorites">
        <button className='p-2 mt-3 mx-2 bg-green-900 rounded-md text-orange-400'>
      <b>💚 Favorite Plants </b>
      </button> </Link>


      <div className='searchbarBox mx-auto max-w-screen-md  py-5 px-20'>
      <SearchBar userId= {userId} className ="display flex-auto " placeholder={'Search for your favorite plants!'}/>

      </div>
      <Footer></Footer></div>
      </div>

    
        
    </>
  )
}

export default Home
