import React from 'react';
import SearchBar from '../Components/SearchBar';
import { Link } from "react-router-dom";
import Footer from '../Components/Footer';



function Home({userId}) {
  return (
    <>
      <div className="display flex-auto text-center border-solid border-4  border-orange-500 mx-auto max-w-screen-md  rounded-lg bg-leafgreen h-fit shadow-xl">
      <h1 className="  text-3xl font-bold underline text-green-700">
        Super Duper Plant App!
      </h1>
      
    <Link to="/PlantHealth">
        <button className='p-2  rounded-md text-yellow-500 '>
        <b>Assess your plant health  </b>
      </button>
      </Link>
     
      <p><Link to="/PlantID"><button>
        Get more info on your plant
      </button>
      </Link>
      </p>
      </div>
      {/* <SearchBar className ="display flex-auto " placeholder={'Search for your favorite plants!'}/> */}
      <Footer/>
  {/* </div> */}
      <SearchBar userId= {userId} className ="display flex-auto " placeholder={'Search for your favorite plants!'}/>

        
    </>
  )
}

export default Home
