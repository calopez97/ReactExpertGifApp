import React, { useState } from 'react'
import AddCategory from './components/AddCategory';
import GifGrid from './components/GifGrid';

const GifExpertApp = () => {

    // const categories = [ 'One punch', 'Samurai X', 'KNY'];

    const [categories, setCategories] = useState([]);

    // const handleAdd = () => {
    //     setCategories(['SNK', ...categories]);
    // }



    return (
        <>
            <div className="main-banner">
                <div className="banner"></div>
                <div className="initial-info container">
                    <h2>GifExpertApp</h2>
                    <p>¡Gifs dynamic search!</p>
                    <AddCategory setCategories={setCategories}/>
                </div>
            </div>
            <div className="container">
                <ul>
                    {
                        categories.map( category => (
                            <GifGrid key={category} 
                                    category={category}        
                            />
                        )) 
                    }               
                </ul>
            </div>
        </>
    )
}

export default GifExpertApp;
