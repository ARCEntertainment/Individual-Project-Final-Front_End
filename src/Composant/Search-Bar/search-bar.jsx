import React from "react";
import { useState } from "react";
import  Style  from './search-style.module.css'




const Search = ({placeholder, onSearch}) => {


    const  [search, setSearch]  =useState('') 


    const handlClick = () => {

        console.log(search);

        onSearch(search)
    }



    return (

        <div className={Style.container}>

            <div className={Style.ui}>
                <input className={Style.put} 
                    type="text"
                    value={search}
                    onChange={(e) => setSearch(e.target.value)}
                    placeholder={placeholder}
                />

                <button onClick={handlClick}>Search</button>
            </div>

            
        </div>

    )
}

export default Search