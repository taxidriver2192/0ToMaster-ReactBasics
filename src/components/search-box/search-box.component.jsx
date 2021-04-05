import React from 'react';

import './search-box.style.css';
export const SearchBox = ({ plaseholder, handleChange }) => (
    <input
        className='search'
        type='search'
        placeholder={plaseholder}
        onChange={handleChange}
    />
);