import React, { useState } from 'react';
import FileBase64 from 'react-file-base64';
import SearchBar from './Components/SearchBar';
import './index.css';

// key for plant app  = z0EpYoHf0fM03XQTHFPY15OhgV1o2CUefZBjSu1xq7KOivRraP
// key for insect app = cVAN7vCErWcnyUDRGW6wHrGOp2FEtRsYxHXhGt9tsvVZHes6zd


const PlantId = () => {
   const [plantFile, setPlantFile] = useState(null);

   const handleInput = (files) => {
    setPlantFile(files);
   };

const setPicIdData = () => {
    const data = {
        api_key: "z0EpYoHf0fM03XQTHFPY15OhgV1o2CUefZBjSu1xq7KOivRraP",
        images: [plantFile.base64.slice(23)],
        modifiers:["crops_fast","similar_images"],
        plant_language: "en",
        plant_details: ["common_names","taxonomy","url"  ],
    };

    fetch('https://api.plant.id/v2/identify', {
        method: 'POST' ,
    
        headers: {
            'Content-Type': 'application/json', },
            body: JSON.stringify(data),
        })
        .then(response => response.json())
        .then(responseData => {
            console.log ('Your Plant Has Been Analyzed! ', responseData);
        })
    }


   
    return(
    <>
        <SearchBar placeholder="Search for a Plant or Insect..." data ={setPicIdData}/>
        <div>
            Plant ID  
            <FileBase64 
            multiple={false}
            onDone={handleInput}
            />
             
            <button onClick={setPicIdData}>click me </button>
          
        </div>
    </>
    )
}

export default PlantId;