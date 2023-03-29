import React, { useState } from 'react';
import FileBase64 from 'react-file-base64';
import { Link } from "react-router-dom";
import SearchBar from '../Components/SearchBar';


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

        
        <div className="display flex-auto text-center border-solid border-4  border-orange-500 mx-auto max-w-screen-md  rounded-lg bg-leafgreen h-fit shadow-xl">
        <p><Link to="/PlantID" className='p-2  rounded-md text-yellow-500 '><button>
        <b>Identify Your Plant</b>
      </button>
      </Link>
      
      <Link to="/">
        <button className='p-2  rounded-md text-yellow-500 '>
        <b> Home </b>
      </button>
      </Link></p>

        <div className='body'>
            
            <h1 className='text-3xl text-[#3f6212]'>Get your Plant's Health Here!</h1>
            <h2>Upload a picture of your plant below</h2>
            </div>
            <div className=''>
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
            
            <p> {plantHealth!==null?plantHealth?"true":"false":null}</p>
            {/* if the thing is null then we are saying don't show anything */}
            <ul>{plantDiseases?.map((disease) =>  {
               return <li key={disease.entity_id}><b>Potential issue:</b>{disease.name} <b>| Treatment Plan Options:</b>{disease.disease_details.treatment.biological} 
               <b><a src={disease.disease_details.url}>Click here for more info</a></b>
               </li>
            })}</ul>
<SearchBar>      </SearchBar>
    </div></div>
        </>
    )
}
export default PlantHealth;