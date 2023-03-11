import React, { useState } from 'react';
import FileBase64 from 'react-file-base64';

// key for plant app  = z0EpYoHf0fM03XQTHFPY15OhgV1o2CUefZBjSu1xq7KOivRraP
// key for insect app = cVAN7vCErWcnyUDRGW6wHrGOp2FEtRsYxHXhGt9tsvVZHes6zd


const PlantHealth = () => {
   const [plantFile, setPlantFile] = useState(null);

   const handleInput = (files) => {
    setPlantFile(files);
   };

const setPicIdData = () => {
    const data = {
        api_key: "z0EpYoHf0fM03XQTHFPY15OhgV1o2CUefZBjSu1xq7KOivRraP",
        images: [plantFile.base64.slice(23)],
        modifiers:["similar_images"],
        plant_language: "en",
        plant_details: ["description", "treatment" ],
    };

    fetch('https://api.plant.id/v2/health_assessment', {
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
        <div>
            Plant Health
            <FileBase64 
            multiple={false}
            onDone={handleInput}
            />
             
            <button onClick={setPicIdData}>click me </button>
          
        </div>
    )
}

export default PlantHealth;