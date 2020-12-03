import React from 'react'
import { useFetchGifs } from '../hooks/useFetchGifs'
import { GifGridItem } from './GifGridItem';

export const GifGrid =  ({ category }) => {

    const { data: images, loading } = useFetchGifs(category);

    return (
        <>
            <h3 className = "animate__animated animate__slideInLeft"> {category} </h3>
            <p className = "animate__animated animate__bounceIn"> { loading && 'Cargando Gifs...' } </p>
            <div className="card-grid animate__animated animate__fadeInUp">
                <ol>
                    {
                        images.map(img => (
                            <GifGridItem
                                key={img.id}
                                {...img}
                            />
                        ))
                    }
                </ol>
            </div>
        </>
    )
}
