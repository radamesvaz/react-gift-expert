import React, { useState } from 'react'
import { AddCategory } from './components/AddCategory'
import { GifGrid } from './components/GifGrid';

export const GifExpertApp = () => {

    const [category, setCategory] = useState(['Blade Runner'])

    //  Spread operator para copiar el estado anterior si es arreglo u objeto
    const handleAgregar = (categoria) => setCategory([categoria, ...category]);
    

    return (
        <>
            <h2>GifExpertApp</h2>
            <AddCategory handleAgregar = { handleAgregar } />
            <hr />

            <ol>
                { 
                    category.map(cat =>  (
                        <GifGrid  
                           key = {cat}
                           category = {cat}
                       />
                        )
                    ) 
                }
            </ol>
        </>
    )
}
