import React from "react";
import '../index.css';

function SearchBar({ placeholder, data }) {
    return(
        <div>
            <div className="mt-300 flex">
                <input className="bg-white border-0	rounded-2 rounded-r-none text-18 p-15 h-30 w-300"type="text" placeholder={placeholder}/>
                <div></div>
            </div>
            <div className="dataResult"></div>
        </div>
    )
}

export default SearchBar;