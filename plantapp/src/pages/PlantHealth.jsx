import React, { useState } from 'react';
import FileBase64 from 'react-file-base64';
import Footer from '../Components/Footer';
import { Link } from "react-router-dom";






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

        
        <div className="bg-opacity-70 display flex-auto text-center  mx-auto max-w-screen-md  rounded-lg bg-leafgreen h-fit shadow-xl">
        
        <Link to="/PlantID" ><button className='p-2 mt-3 mx-2 bg-green-900 rounded-md text-orange-400'>
        <b>🔎 Identify Your Plant</b>
      </button>
      </Link>
      
      <Link to="/Home">
        <button className='p-2 mt-3 mx-2 bg-green-900 rounded-md text-orange-400'>
        <b> 🏠 Home </b>
      </button>
      </Link>

      <Link to="/Favorites">
        <button className='p-2 mt-3 mx-2 bg-green-900 rounded-md text-orange-400'>
      <b>💚 Favorite Plants </b>
      </button> 
      </Link> 

        
            
            <h1 className='text-3xl text-[#3f6212] pt-2'>Get Your Plant's Health Here!</h1>
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
            })}
            
            </div>
            <div class="min-h-screen">
        <div className="sticky top-[100vh]"><Footer/></div>
      </div>
   </div>
        </>
    )
}
export default PlantHealth;