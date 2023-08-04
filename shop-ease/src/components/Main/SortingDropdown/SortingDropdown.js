// Import necessary dependencies from React
import React from 'react';

// Import CSS styles for the component
import './SortingDropdown.css';

// SortingDropdown component
const SortingDropdown = ({ onSortChange }) => {
    // Function to handle sorting change
    const handleSortChange = (event) => {
        onSortChange(event.target.value);
    };

    return (
        <div className='sorting__by'>
            {/* Label for the sorting dropdown */}
            <label htmlFor="sorting" className="sorting__label">
                SORT:
            </label>
            {/* Select element for sorting options */}
            <select id="sorting" className="sorting__select" onChange={handleSortChange}>
                <option value="name-asc">Name (A-Z)</option>
                <option value="name-desc">Name (Z-A)</option>
                <option value="price-asc">Price (Low to High)</option>
                <option value="price-desc">Price (High to Low)</option>
            </select>
        </div>
    );
};

// Export the SortingDropdown component for use in other parts of the application
export default SortingDropdown;
