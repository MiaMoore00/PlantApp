import React, { useState } from 'react';
import FileBase64 from 'react-file-base64';
// key for plant app  = z0EpYoHf0fM03XQTHFPY15OhgV1o2CUefZBjSu1xq7KOivRraP
// key for insect app = cVAN7vCErWcnyUDRGW6wHrGOp2FEtRsYxHXhGt9tsvVZHes6zd
const PlantHealth = () => {
   const [plantFile, setPlantFile] = useState(null);
   const [plantHealth, setPlantHealth] =useState(null);
  const [plantDiseases, setPlantDiseases] = useState(null);
   const handleInput = (files) => {
    setPlantFile(files);
   };
const setPicIdData = () => {
    const data = {
        api_key: "z0EpYoHf0fM03XQTHFPY15OhgV1o2CUefZBjSu1xq7KOivRraP",
        images: [plantFile.base64.slice(23)],
        modifiers:["similar_images"],
        plant_language: "en",
        plant_details: ["description", "treatment"],
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
            const isHealthy = responseData.health_assessment.is_healthy
        setPlantHealth(isHealthy);
        const diseases = responseData.health_assessment.diseases
        setPlantDiseases(diseases);
        })
    }
    return(
        <div>
            <div className="title">
            <h1>Get your plants' health Here</h1>
            <h2>Just upload a picture of your plant below</h2>
            </div>
            <div className="upload">
            <FileBase64
            multiple={false}
            onDone={handleInput}
            />
            <button onClick={setPicIdData}>Is My Plant Healthy? </button>
            </div>
            <p> {plantHealth!==null?plantHealth?"true":"false":null}</p>
            {/* if the thing is null then we are saying don't show anything */}
            <ul>{plantDiseases?.map((disease) =>  {
               return <li key={disease.entity_id}>Potential issue:{disease.name}</li>
            })}</ul>
        </div>
    )
}
export default PlantHealth;