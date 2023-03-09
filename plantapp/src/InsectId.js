import React, { useState } from 'react';
import FileBase64 from 'react-file-base64';

// key for plant app  = z0EpYoHf0fM03XQTHFPY15OhgV1o2CUefZBjSu1xq7KOivRraP
// key for insect app = cVAN7vCErWcnyUDRGW6wHrGOp2FEtRsYxHXhGt9tsvVZHes6zd


const InsectId = () => {
   const [insectFile, setInsectFile] = useState(null);

   const handleInput = (files) => {
    setInsectFile(files);
   };

const setPicIdData = () => {
    const data = {
        api_key: "cVAN7vCErWcnyUDRGW6wHrGOp2FEtRsYxHXhGt9tsvVZHes6zd",
        images: [insectFile.base64.slice(23)],
        modifiers:"similar_images",
        language: "en",
        details: ["common_names","taxonomy","url"  ],
    };

    fetch('https://insect.mlapi.ai/api/v1/identification', {
        method: 'POST' ,
        mode: 'no-cors',
        headers: {
            'Content-Type': 'application/json', },
            body: JSON.stringify(data),
        })
        .then(response => response.json())
        .then(responseData => {
            console.log ('Success', responseData);
        })
    }


   
    return(
        <div>
            Insect ID 
            <FileBase64 
            multiple={false}
            onDone={handleInput}
            />
             
            <button onClick={setPicIdData}>click me </button>
          
        </div>
    )
}

export default InsectId;