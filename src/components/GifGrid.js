import React from 'react'
import { useFetchGifs } from '../hooks/useFetchGifs';
import GifGridItem from './GifGridItem';

const GifGrid = ({category}) => {


    const {data, loading}  = useFetchGifs(category);
 

    return (
        <>
        {
            !loading ? (
                <> 
                    <h3 className="animate__animated animate__zoomIn">{category}</h3>
                    <div className="gif-grid">

                            {
                                data.map(image => (
                                    <GifGridItem key={image.id} 
                                                {...image} />
                                ))
                            }
                    </div>
                </>
            ) : ( <p className=" animate__animated animate__bounceIn">Loading</p>)
        }
        
        </>
    )
}

export default GifGrid;
