import React, { useState } from 'react';
import FileBase64 from 'react-file-base64';
import './App.css'
import { Link } from "react-router-dom";
import Footer from "./Components/Footer"


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
        <div className='bg-white font-black pt-3 flex pl-5'>
        <p><Link to="/PlantID" className='text-[#3f6212] '><button>
        Identify Your Plant
      </button>
      </Link>
      </p>
        </div>
        <div className='bg-[rgb(152,182,152)]'>
            <div className='font-black bg-white py-5'>
            <h1 className='text-3xl text-[#3f6212]'>Get your Plant's Health Here!</h1>
            <h2>Upload a picture of your plant below</h2>
            </div>
            <div className='plantBackground h-56 w-screen bg-cover brightness-75 border-solid border-y-4 border-y-current'>
            </div>
            <div className="upload py-5">
            <FileBase64
            multiple={false}
            onDone={handleInput}
            />
            </div>
            <div>
            <button 
            onClick={setPicIdData}
            className="bg-[rgb(102,144,104)] w-48 h-12 rounded-full cursor-pointer border border-solid border-black align-top"
            >
                Click here for a Health Assessment of your Plant! 
            </button>
            </div>
            <p> {plantHealth!==null?plantHealth?"true":"false":null}</p>
            {/* if the thing is null then we are saying don't show anything */}
            <ul>{plantDiseases?.map((disease) =>  {
               return <li key={disease.entity_id}><b>Potential issue:</b>{disease.name} <b>| Treatment Plan Options:</b>{disease.disease_details.treatment.biological} 
               <b><a src={disease.disease_details.url}>Click here for more info</a></b>
               </li>
            })}</ul>

        </div>
        <Footer/>
        </>
    )
}
export default PlantHealth;