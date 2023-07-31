import React, {useState,useEffect} from 'react';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import './joshwcomeau.css';
import './App.css';

import Header from './components/Header/Header';
import Products from './components/Main/Products';
import Footer from './components/Footer/Footer';
import Nav from './components/Header/Nav/Nav';
import CategoryHeader from './components/Header/CategoryHeader';

function App() {
    // Check if there is a preferred category in localStorage when the app starts
    const defaultCategory = localStorage.getItem('selectedCategory') || 'LEATHER BAGS';
    const [selectedCategory, setSelectedCategory] = useState(defaultCategory);

    const handleCategoryClick = (category) => {
        setSelectedCategory(category);
        // Запазете избраната категория в localStorage
        localStorage.setItem('selectedCategory', category);
    };

    // Add the following useEffect to redirect the homepage to /leather-bags
    useEffect(() => {
        if (window.location.pathname === '/') {
            window.location.pathname = '/leather-bags';
        }
    }, []);


    return (
        <Router>
            <div className='header__wrapper-sticky'>
                <Header/>
                <Nav onCategoryClick={handleCategoryClick} selectedCategory={selectedCategory}/>
            </div>
            <CategoryHeader category={selectedCategory}/>
            <div className='product__wrapper'>
                <Routes>
                    <Route path="/leather-bags" element={<Products selectedCategory={selectedCategory}/>}/>

                    <Route path="/belts" element={<Products selectedCategory={selectedCategory}/>}/>
                    <Route path="/wallets" element={<Products selectedCategory={selectedCategory}/>}/>
                    <Route path="/leather-products" element={<Products selectedCategory={selectedCategory}/>}/>

                    {/*footer  Route*/}
                    {/*<Route path="/contact" element={<Contact />} />*/}
                    {/*<Route path="/advertise" element={<Advertise />} />*/}
                    {/*<Route path="/terms" element={<Terms />} />*/}
                    {/*<Route path="/subscriptions" element={<Subscriptions />} />*/}
                </Routes>
            </div>
            <Footer/>
        </Router>
    );
}

export default App;
