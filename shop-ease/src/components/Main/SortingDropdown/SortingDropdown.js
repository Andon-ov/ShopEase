import React from 'react';
import './SortingDropdown.css';

const SortingDropdown = ({onSortChange}) => {
    const handleSortChange = (event) => {
        onSortChange(event.target.value);
    };

    return (
        <div className='sorting__by'>
            <label htmlFor="sorting">SORT BY&nbsp;&nbsp;:</label>
            <select id="sorting" onChange={handleSortChange}>
                <option value="name-asc">Name (A-Z)</option>
                <option value="name-desc">Name (Z-A)</option>
                <option value="price-asc">Price (Low to High)</option>
                <option value="price-desc">Price (High to Low)</option>
            </select>
        </div>
    );
};

export default SortingDropdown;
