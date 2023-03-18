import React from 'react';
import SearchBar from '../Components/SearchBar.jsx';



function Home() {
  return (
  
    <div >
      <h1 className="text-3xl py-5 font-black underline text-green-700">
      Super Duper Plant App!
      </h1>
      <SearchBar placeholder="Search for a Plant or Insect..." />

     


    </div>
    
  )
}

export default Home
