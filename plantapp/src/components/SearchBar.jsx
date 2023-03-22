import React, {useState, useEffect, useMemo} from "react";

export default function SearchBar({ placeholder })  {
    
const [query, setQuery] = useState("");
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
    
    const plantData= useMemo(()=>{
        if(!data) return null
        return data.map((plant)=>

    {return  <p key={plant.id}> <b>Common Name:</b>{plant.common_name} 
     <b>Other Name:</b>{plant.other_name}
     <b>Sunlight:</b> {plant.sunlight}<b> Scientific Name:</b>{plant.scientific_name} <b>Watering:</b> {plant.watering}
    </p>
    //<img src={plant.default_image.medium_url} ></img>
     // when I try to render image page goes blank 
    })
    },[data])


useEffect(() => {
    searchPlants()

}, []);

    const handleChange = (e) => {
        e.preventDefault();
        setQuery(e.target.value);
      };

    const handleClick = () => {
        searchPlants()
    }


    return(
        <div className='pb-5 max-w-md mx-auto'>
        <div className="relative flex items-center  h-12 rounded-lg focus-within:shadow-lg bg-white overflow-hidden">
            <div className=" text-gray-300">
                 <button onClick={handleClick}>
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
                </button> 
            </div>
    
            <input className="peer sans-serif h-full w-full outline-none text-md text-gray-700 pr-2"
            type="text"
            onChange={handleChange}
            placeholder={placeholder}
            value={query} 
            /> 

        </div>

        
           
        
            <div>
            

               {plantData}
 


    </div>
    

    </div>
    )
}
