// Import necessary dependencies from React
import React from 'react';
import { Link, useLocation } from 'react-router-dom';

// Import CSS styles for the component
import './Nav.css';

// Array of category objects
const categories = [
    { path: '/leather-bags', name: 'LEATHER BAGS' },
    { path: '/belts', name: 'BELTS' },
    { path: '/wallets', name: 'WALLETS' },
    // { path: '/leather-products', name: 'LEATHER PRODUCTS' },
];

// Nav component
function Nav({ onCategoryClick, selectedCategory }) {
    // Get the current location
    const location = useLocation();

    // Function to handle category click
    const handleCategoryClick = (category) => {
        onCategoryClick(category);
    };

    return (
        <section className='nav'>
            {/* Navigation list */}
            <ul className="nav__ul">
                {/* Map through categories and create list items */}
                {categories.map((category) => (
                    <li key={category.path} className="nav__li">
                        {/* Link to each category */}
                        <Link
                            to={category.path}
                            className={`nav__link ${location.pathname === category.path ? 'active' : ''}`}
                            onClick={() => handleCategoryClick(category.name)}
                        >
                            {category.name}
                        </Link>
                    </li>
                ))}
            </ul>
        </section>
    );
}

export default Nav;
