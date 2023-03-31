import React from 'react';
import SearchBar from '../Components/SearchBar';
import { Link } from "react-router-dom";
import Footer from '../Components/Footer';



function Home({userId}) {
  return (
    <>
    
       <div className="bg-opacity-80   text-center 0 mx-auto max-w-screen-md  rounded-t-lg  bg-leafgreen h-fit w-fit shadow-xl">
         <Link to="/PlantHealth">
        <button className='p-2  rounded-md text-orange-700 '>
        <b>🌱Assess your plant health  </b>
      </button>
      </Link>
     
      <Link to="/PlantID">
        <button className='p-2 rounded-md text-orange-700'>
      <b>🔎Get more info on your plant </b>
      </button> </Link>


      <div className='searchbarBox mx-auto max-w-screen-md  py-5 px-20'>
      <SearchBar userId= {userId} className ="display flex-auto " placeholder={'Search for your favorite plants!'}/>

      </div></div>
        
    </>
  )
}

export default Home
