import React, { useState } from "react";
import AddCategories from "./components/AddCategories";
import { GifGrid } from "./components/GifGrid";

const GifExpertApp = () =>{

   // const categories = ['One Punch', 'Naruto', 'Dragon Ball'];
   const [ categories, setCategories ] = useState(['Dragon Ball']);
/* 
    const handleAdd = () => {
        setCategories( [...categories, 'HunterXHunter']);
    } */

    return(
        <>
            <h2>GifExpertApp</h2>
            <AddCategories setCategories={setCategories}/>
            <hr />
          {/*   <button onClick={handleAdd}>Agregar</button> */}

            <ol>
                { 
                    categories.map( category => (
                        <GifGrid 
                            key={ category }
                            category={ category } />
                    ))
                }
            </ol>
        </>
    )
}

export default GifExpertApp;