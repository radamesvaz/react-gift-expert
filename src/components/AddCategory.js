import React, { useState } from 'react';
import PropTypes from 'prop-types'

export const AddCategory = ({ handleAgregar }) => {
    
    const [inputValue, setInputValue] = useState('')
    
    const handleInput = (e) => {
        const target = e.target.value;
        setInputValue(target);
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        if(inputValue.trim().length > 2) {
            handleAgregar(inputValue);
            setInputValue('');
        }
    }

    return (   
        <form onSubmit = { handleSubmit }>
            <input 
                type="text" 
                value = { inputValue }
                onChange = { handleInput }
            />
        </form>
    )
}

AddCategory.propTypes = {
    handleAgregar: PropTypes.func.isRequired
}
