import React, { useState } from 'react';
import FileBase64 from 'react-file-base64';
import Footer from '../Components/Footer';
import { Link } from "react-router-dom";



const PlantId = () => {
   const [plantFile, setPlantFile] = useState(null);
   const [plantInfo, setPlantInfo] = useState(null);

   const handleInput = (files) => {
    setPlantFile(files);
   };

const setPicIdData = () => {
    const data = {
        api_key: "Y11w9SsCfq0zF0B7PVAhVnOosNpjyjjdwpdTD5WwbazBvzY7g1",
        images: [plantFile.base64.slice(23)],
        modifiers:["crops_fast","similar_images"],
        plant_language: "en",
        plant_details: ["common_names",
        "url",
        "name_authority",
        "wiki_description",
        "taxonomy",
        "synonyms" ],
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
            const plantInfoArray = responseData.suggestions
            setPlantInfo(plantInfoArray);
        })
    }


   
    return(
        <div className="bg-opacity-80 display flex-auto text-center border-solid border-4  border-orange-500 mx-auto max-w-screen-md  rounded-lg bg-leafgreen h-fit shadow-xl">
            
            <Link to="/PlantHealth">
        <button className='p-2 mt-3 mx-2 bg-lime-700 rounded-md text-orange-500 '>
        <b>🌱 Assess your plant health  </b>
      </button>
      </Link>
     
      <Link to="/">
        <button className='p-2 mt-3 mx-2 bg-lime-700 rounded-md text-orange-500 '>
        <b> 🏠 Home </b>
      </button>
      </Link>

      <Link to="/Favorites">
        <button className='p-2 mt-3 mx-2 bg-lime-700 rounded-md text-orange-500'>
      <b>💚 Favorite Plants </b>
      </button> 
      </Link> 
      <h1 className='text-3xl text-[#3f6212] pt-2'>Identify Your Plant!</h1>
            <h2>Upload a Picture of Your Plant🪴 Below ↓</h2>
      <div className="upload py-5">
            <FileBase64 
            multiple={false}
            onDone={handleInput}
            />
             </div>
            <button className="bg-[rgb(102,144,104)] w-48 h-12 rounded-full cursor-pointer  border-solid border-green-700 align-top"onClick={setPicIdData}>Analyze Plant🔍 </button>
            
          <ul>{plantInfo?.map((plantArray) => {
            return  <div className ="p-5 flex  justify-center ">
                <li key={plantArray.id}><img className ="rounded-full mx-auto"  src={plantArray.similar_images[0].url}></img> <br />
               <b>Common Names: </b>{plantArray.plant_details.common_names} <br />
               <b>Scientific Names: </b>{plantArray.plant_details.scientific_name}<br />
               <b>Taxonomy: 
                </b>Class- {plantArray.plant_details.taxonomy.class}, Family- {plantArray.plant_details.taxonomy.family} , Kingdom- {plantArray.plant_details.taxonomy.kingdom}
                <br />
                <b>Plant Description: </b>{plantArray.plant_details.wiki_description.value}<br />
               <b><a className = "text-green-600 " href={plantArray.plant_details.url}>Click Here for more info!</a></b><br />
                {/* I need to put a condition if null... */}
                <button className='  rounded-md text-orange-500'  value={plantArray.plant_details.common_names}>Add to Favorites💚</button></li>
            </div>
          })}

          </ul>
          <div class="min-h-screen">
        <div className="sticky top-[100vh]"><Footer/></div>
      </div>
        </div>
    )
}

export default PlantId;