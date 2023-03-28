import React from 'react';
import SearchBar from '../components/SearchBar';
import './Home.css'
import { Link } from "react-router-dom";
import Footer from '../Components/Footer';



function Home({userId}) {
  return (
    <>
    
    <div>
      <h1 className="text-3xl py-5 font-bold underline text-green-700">
        Super Duper Plant App!
      </h1>
      
      <p><Link to="/PlantHealth"><button>
        Assess your plant health
      </button>
      </Link>
      </p>
      <p><Link to="/PlantID"><button>
        Get more info on your plant
      </button>
      </Link>
      </p>
      <div>
<<<<<<< HEAD
      <SearchBar className ="display flex-auto " placeholder={'Search for your favorite plants!'}/>
      <Footer/>
  </div>
=======
      <SearchBar userId= {userId} className ="display flex-auto " placeholder={'Search for your favorite plants!'}/>

</div>
>>>>>>> main
        </div>
    </>
  )
}

export default Home
