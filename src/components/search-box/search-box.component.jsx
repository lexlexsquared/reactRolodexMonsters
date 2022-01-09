import React from 'react';
import './search-box.styles.css';

// functional components don't have access to constructor, internal state, or life cycle methods.
// easier to test
export const SearchBox = ({ placeholder, handleChange }) => {
  return(
  <input 
    className='search' 
    type='search' 
    placeholder={ placeholder } 
    onChange={ handleChange }
  />)
};