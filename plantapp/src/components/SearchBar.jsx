import React, {useState, useEffect} from "react";

export default function SearchBar({ placeholder })  {

const [query, setQuery] = useState("");
const searchPlants = () => {
    const urlEncodedSearchString = encodeURIComponent(query);

   

    const options = {
        method: 'GET',
        headers: {
            Authorization: 'GKZOHNZj0xP65kk0BAE2Tl9LGagm0pfD3DFNxAEEZcMQBhRZVDco8vbNJdnwwCo0',
            'X-RapidAPI-Key': '55ca4bc0cemshd3f8ab971b7d929p15055djsnf4620756956d',
            'X-RapidAPI-Host': 'plants2.p.rapidapi.com'
        }
    };
    
    fetch(`https://plants2.p.rapidapi.com/api/plants?CN=${urlEncodedSearchString}`, options)
        .then(response => response.json())
        .then(response => console.log(response))
        .catch(err => console.error(err));
    
}
useEffect(() => {
    searchPlants()
}, []);

    const handleChange = (e) => {
        e.preventDefault();
        setQuery(e.target.value);
      };

    const handleClick = () => {
        searchPlants()
    }

    return(
        <div className='pb-5 max-w-md mx-auto'>
        <div className="relative flex items-center w-full h-12 rounded-lg focus-within:shadow-lg bg-white overflow-hidden">
            <div className="grid place-items-center h-full w-12 text-gray-300">
                <button onClick={handleClick()}>
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
                </button>
            </div>
    
            <input
            
            className="peer sans-serif h-full w-full outline-none text-md text-gray-700 pr-2"
            type="search"
            onChange={handleChange}
            placeholder={placeholder}
            value={query} 
            /> 
        </div>
    </div>
    )
}
