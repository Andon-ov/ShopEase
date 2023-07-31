// import React from 'react';
// import './Nav.css';
//
// function Nav({onCategoryClick, selectedCategory}) {
//     const handleCategoryClick = (category) => {
//         onCategoryClick(category);
//     };
//
//     const defaultCategory = selectedCategory || 'LEATHER BAGS';
//
//     return (
//         <section className='nav'>
//             <ul className="nav__ul">
//                 <li className="nav__li">
//           <span onClick={() => handleCategoryClick('LEATHER BAGS')}
//                 className={`nav__link ${defaultCategory === 'LEATHER BAGS' ? 'active' : ''}`}
//           >Leather Bags</span>
//                 </li>
//                 <li className="nav__li">
//           <span onClick={() => handleCategoryClick('BELTS')}
//                 className={`nav__link ${defaultCategory === 'BELTS' ? 'active' : ''}`}
//           >Belts</span>
//                 </li>
//                 <li className="nav__li">
//           <span onClick={() => handleCategoryClick('WALLETS')}
//                 className={`nav__link ${defaultCategory === 'WALLETS' ? 'active' : ''}`}
//           >Wallets</span>
//                 </li>
//                 <li className="nav__li">
//           <span onClick={() => handleCategoryClick('LEATHER PRODUCTS')}
//                 className={`nav__link ${defaultCategory === 'LEATHER PRODUCTS' ? 'active' : ''}`}
//           >Leather Products</span>
//                 </li>
//             </ul>
//         </section>
//     );
// }
//
// export default Nav;

//
// import React from 'react';
// import { Link, useLocation } from 'react-router-dom'; // Забележете добавеният импорт на useLocation
// import './Nav.css';
//
// function Nav() {
//     const location = useLocation(); // Използвайте useLocation, за да вземете текущия път
//
//     return (
//         <section className='nav'>
//             <ul className="nav__ul">
//                 <li className="nav__li">
//                     <Link to="/leather-bags" className={`nav__link ${location.pathname === '/' ? 'active' : ''}`}>Leather Bags</Link>
//                 </li>
//                 <li className="nav__li">
//                     <Link to="/belts" className={`nav__link ${location.pathname === '/belts' ? 'active' : ''}`}>Belts</Link>
//                 </li>
//                 <li className="nav__li">
//                     <Link to="/wallets" className={`nav__link ${location.pathname === '/wallets' ? 'active' : ''}`}>Wallets</Link>
//                 </li>
//                 <li className="nav__li">
//                     <Link to="/leather-products" className={`nav__link ${location.pathname === '/leather-products' ? 'active' : ''}`}>Leather Products</Link>
//                 </li>
//             </ul>
//         </section>
//     );
// }
//
// export default Nav;


import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import './Nav.css';

function Nav({ onCategoryClick, selectedCategory }) {
    const location = useLocation();

    const handleCategoryClick = (category) => {
        onCategoryClick(category);
    };

    const defaultCategory = selectedCategory || 'LEATHER BAGS';

    return (
        <section className='nav'>
            <ul className="nav__ul">
                <li className="nav__li">

                    <Link to="/leather-bags" className={`nav__link ${location.pathname === '/leather-bags' ? 'active' : ''}`} onClick={() => handleCategoryClick('LEATHER BAGS')}>
                        Leather Bags
                    </Link>
                </li>
                <li className="nav__li">
                    <Link to="/belts" className={`nav__link ${location.pathname === '/belts' ? 'active' : ''}`} onClick={() => handleCategoryClick('BELTS')}>
                        Belts
                    </Link>
                </li>
                <li className="nav__li">
                    <Link to="/wallets" className={`nav__link ${location.pathname === '/wallets' ? 'active' : ''}`} onClick={() => handleCategoryClick('WALLETS')}>
                        Wallets
                    </Link>
                </li>
                <li className="nav__li">
                    <Link to="/leather-products" className={`nav__link ${location.pathname === '/leather-products' ? 'active' : ''}`} onClick={() => handleCategoryClick('LEATHER PRODUCTS')}>
                        Leather Products
                    </Link>
                </li>
            </ul>
        </section>
    );
}

export default Nav;
