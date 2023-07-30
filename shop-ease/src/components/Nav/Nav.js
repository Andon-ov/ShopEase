import React from 'react';
import './Nav.css';

function Nav({onCategoryClick, selectedCategory}) {
    const handleCategoryClick = (category) => {
        onCategoryClick(category);
    };

    const defaultCategory = selectedCategory || 'LEATHER BAGS';

    return (
        <section className='nav'>
            <ul className="nav__ul">
                <li className="nav__li">
          <span onClick={() => handleCategoryClick('LEATHER BAGS')}
                className={`nav__link ${defaultCategory === 'LEATHER BAGS' ? 'active' : ''}`}
          >Leather Bags</span>
                </li>
                <li className="nav__li">
          <span onClick={() => handleCategoryClick('BELTS')}
                className={`nav__link ${defaultCategory === 'BELTS' ? 'active' : ''}`}
          >Belts</span>
                </li>
                <li className="nav__li">
          <span onClick={() => handleCategoryClick('WALLETS')}
                className={`nav__link ${defaultCategory === 'WALLETS' ? 'active' : ''}`}
          >Wallets</span>
                </li>
                <li className="nav__li">
          <span onClick={() => handleCategoryClick('LEATHER PRODUCTS')}
                className={`nav__link ${defaultCategory === 'LEATHER PRODUCTS' ? 'active' : ''}`}
          >Leather Products</span>
                </li>
            </ul>
        </section>
    );
}

export default Nav;
