import React, { useState } from 'react';
import FileBase64 from 'react-file-base64';
import SearchBar from '../Components/SearchBar';

// key for plant app  = z0EpYoHf0fM03XQTHFPY15OhgV1o2CUefZBjSu1xq7KOivRraP
// key for insect app = cVAN7vCErWcnyUDRGW6wHrGOp2FEtRsYxHXhGt9tsvVZHes6zd


const PlantId = () => {
   const [plantFile, setPlantFile] = useState(null);
   const [plantInfo, setPlantInfo] = useState(null);

   const handleInput = (files) => {
    setPlantFile(files);
   };

const setPicIdData = () => {
    const data = {
        api_key: "z0EpYoHf0fM03XQTHFPY15OhgV1o2CUefZBjSu1xq7KOivRraP",
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
        <div className="display flex-auto text-center border-solid border-4  border-orange-500 mx-auto max-w-screen-md  rounded-lg bg-leafgreen h-fit shadow-xl">
            Plant ID  
            <FileBase64 
            multiple={false}
            onDone={handleInput}
            />
             
            <button onClick={setPicIdData}>Analyze Plant </button>
            
          <ul>{plantInfo?.map((plantArray) => {
            return <li key={plantArray.id}>
               <b>Common Names:</b>{plantArray.plant_details.common_names} <b>Scientific Names:</b>{plantArray.plant_details.scientific_name}
               <b>Taxonomy:</b>Class-{plantArray.plant_details.taxonomy.class}, Family-{plantArray.plant_details.taxonomy.family} , Kingdom- {plantArray.plant_details.taxonomy.kingdom}
               <b>Plant Description:</b>{plantArray.plant_details.wiki_description.value}
               <img src={plantArray.similar_images[0].url}></img> <b><a href={plantArray.plant_details.url}>Click Here for more info!</a></b>
                {/* I need to put a condition if null... */}
                <button value={plantArray.plant_details.common_names}>Add to Favorites</button>
            </li>
          })}

          </ul>
          <SearchBar></SearchBar>
        </div>
    )
}

export default PlantId;