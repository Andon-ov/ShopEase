import React from 'react';
import {Link, useLocation} from 'react-router-dom';
import './Nav.css';

const categories = [
    {path: '/leather-bags', name: 'LEATHER BAGS'},
    {path: '/belts', name: 'BELTS'},
    {path: '/wallets', name: 'WALLETS'},
    // {path: '/leather-products', name: 'LEATHER PRODUCTS'},
];

function Nav({onCategoryClick, selectedCategory}) {
    const location = useLocation();

    const handleCategoryClick = (category) => {
        onCategoryClick(category);
    };

    return (
        <section className='nav'>
            <ul className="nav__ul">
                {categories.map((category) => (
                    <li key={category.path} className="nav__li">
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
