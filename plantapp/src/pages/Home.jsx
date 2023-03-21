import React from 'react';
import SearchBar from '../components/SearchBar';
import './Home.css'
import { Link } from "react-router-dom";



function Home() {
  return (
    <>
    <div className="fixed z-20 flex w-full items-center">
      <img className='w-full'src="/images/hangin-leaves.png" alt="" />
    </div>
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
      <SearchBar placeholder={'Search for your favorite plants!'}/>
    </div>
    </>
  )
}

export default Home
