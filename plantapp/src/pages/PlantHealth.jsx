import React, { useState } from 'react';
import FileBase64 from 'react-file-base64';

import { Link } from "react-router-dom";



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
        api_key: "Y11w9SsCfq0zF0B7PVAhVnOosNpjyjjdwpdTD5WwbazBvzY7g1",
        images: [plantFile.base64.slice(23)],
        modifiers:["similar_images","crops_fast"],
        plant_language: "en",
        disease_details: ["cause",
        "common_names",
        "classification",
        "description",
        "treatment",
        "url"],
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
        <>

        
        <div className="bg-opacity-80 display flex-auto text-center border-solid border-4  border-orange-500 mx-auto max-w-screen-md  rounded-lg bg-leafgreen h-fit shadow-xl">
        
        <Link to="/PlantID" ><button className='p-2  rounded-md text-orange-700 '>
        <b>🔎Identify Your Plant</b>
      </button>
      </Link>
      
      <Link to="/">
        <button className='p-2  rounded-md text-orange-700 '>
        <b> 🏠Home </b>
      </button>
      </Link>

        
            
            <h1 className='text-3xl text-[#3f6212]'>Get Your Plant's Health Here!</h1>
            <h2>Upload a Picture of Your Plant🪴 Below ↓</h2>
            <div className="upload py-5">
            <FileBase64
            multiple={false}
            onDone={handleInput}
            />
            </div>
            
            <button 
            onClick={setPicIdData}
            className="bg-[rgb(102,144,104)] w-48 h-12 rounded-full cursor-pointer  align-top"
            >
                Assess Plant🔍
            </button>
           <div className = " p-5 flex flex-col justify-center ">
           
            <p> {plantHealth!==null?plantHealth?<b>Everything Looks Good, Your Plant Is Healthy!🌱</b>:<h3>Lets Take Care Of That Plant!🌱 </h3>:null}</p>
            {/* if the thing is null then we are saying don't show anything */}
            {plantDiseases?.map((disease) =>  {
               return <p> <ul><span><li key={disease.entity_id}><img class= "mx-auto" src={disease.similar_images[0].url}></img> <b>Potential issue:  </b>{disease.name} <b>| Treatment Plan Options: </b>{disease.disease_details.treatment.biological} 
               <b>  <a className = "text-green-600 "href ={disease.disease_details.url}>   Click here for more info!</a></b> 
              
               </li></span></ul></p>  
            })}</div>

   </div>
        </>
    )
}
export default PlantHealth;