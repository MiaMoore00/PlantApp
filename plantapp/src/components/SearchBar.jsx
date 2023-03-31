import React, {useState, useEffect, useMemo,} from "react";
import {Card } from "reactstrap"


export default function SearchBar({ placeholder, userId })  {
    
const [query, setQuery] = useState("");
const [newFav, setNewFav] = useState("");

console.log(query)

const [data,setData] = useState()
  const searchPlants = () => {

    const urlEncodedSearchString = encodeURIComponent(query);
   
    fetch(`https://perenual.com/api/species-list?key=sk-ZgIb641a4c4fc440e238&q=${urlEncodedSearchString}`)
        .then(response => response.json())
        .then(responseData => {
            console.log ( responseData.data);
            setData(responseData.data)
    
       
        })
    } 
    const handleFavorites = async (e) => {
        e.preventDefault();
        console.log("hello");
        try {
          const response = await fetch("http://localhost:3001/api/favorites", {
            method: "PUT",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({favorite: newFav, id: userId}),
          });
          const data = await response.json();
       console.log(data);
        } catch (error) {
          console.log(error);
        }
      };

    const plantData= useMemo(()=>{
        if(!data) return 
        return data.map((plant)=>


        {return( 

          <div className = "flex flex-row justify-start mt-9 ml-3 rounded-full">
        <div className="card bg-transparent text-white rounded-full ">
           <div class="card-img" key={plant.id}> {plant.default_image?<img className=" rounded-lg" src={plant.default_image.medium_url} alt="plant"></img>:null} </div>
          <div class="card-body">
              <div className="card-title uppercase"><h4>{plant.common_name}  </h4></div> 
              <b> ☀️Sunlight: </b> {plant.sunlight}<br />
               <b> 🧬Scientific Name: </b>{plant.scientific_name} <br />
               <b>💦 Watering: </b> {plant.watering} 
              </div></div> </div>
          
             
          
          
           )  
              })
              },[data])








useEffect(() => {
    searchPlants()  }, []);

    const handleChange = (e) => {
        e.preventDefault();
        setQuery(e.target.value);
      };

    const handleClick = () => {
        searchPlants()
    }


    return(
        
        <div className='pb-5 '>
        <div className="relative flex items-center  h-12 rounded-lg focus-within:shadow-lg bg-white overflow-hidden ">
            <div className=" text-gray-300">
                 <button onClick={handleClick}>
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
                </button> 
            </div>
    
            <input className="peer sans-serif h-full w-full outline-none text-md text-gray-700 pr-2"
            type="search"
            onChange={handleChange}
            placeholder={placeholder}
            value={query} 
            /> 

        </div>

        
           
        
           
        <div class="py-8  columns-2 ...">

               {plantData} 
    </div>

    </div>
    )
}
