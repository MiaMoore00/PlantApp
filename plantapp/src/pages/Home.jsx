import React from 'react';
import SearchBar from '../Components/SearchBar';
import { Link } from "react-router-dom";
import Footer from '../Components/Footer';
import './Home.css';




function Home({userId}) {
  return (
    <>
    <div className="leafBackground">
       <div className="display flex-auto text-center border-solid border-4  border-orange-500 mx-auto max-w-screen-md  rounded-lg bg-leafgreen h-fit shadow-xl relative">
      <h1 className=" mt-1 text-3xl font-bold text-green-700">
        Bloom
      </h1>
      
    <Link to="/PlantHealth">
        <button className='p-2  rounded-md text-yellow-500 '>
        <b>Assess your plant health  </b>
      </button>
      </Link>
     
      <Link to="/PlantID">
        <button className='p-2 rounded-md text-yellow-500'>
      <b>Get more info on your plant </b>
      </button> </Link>

      <div className='searchbarBox mx-auto max-w-screen-md  pt-5 px-20'>
      <SearchBar userId= {userId} className ="display flex-auto " placeholder={'Search for your favorite plants!'}/>
    <Footer/>
      </div>
      </div>
      </div>
        
      </>
  )
}

export default Home
