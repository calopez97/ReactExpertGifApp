import React, { useState } from 'react'
import propTypes from 'prop-types';

const AddCategory = ({setCategories}) => {

    const [inputValue, setInputValue] = useState('');

    const handleInputChange = (e) => {
        // console.log(e.target.value);
        setInputValue(e.target.value);
    }

    const handleSubmit = (e) =>{
        e.preventDefault();

        if( inputValue.trim().length > 2){
            setCategories(categs => [  inputValue, ...categs]);
            setInputValue('');
        }
        
    }


    return (
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            value={inputValue}
            onChange={handleInputChange}
          />
        </form>
    )

    
}

AddCategory.propTypes = {
    setCategories: propTypes.func.isRequired
};

export default AddCategory;
