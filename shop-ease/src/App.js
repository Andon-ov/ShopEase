// Import necessary dependencies and styles
import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './joshwcomeau.css';
import './App.css';
import './responsive.css'

// Import components
import Header from './components/Header/Header';
import Products from './components/Main/Products';
import Footer from './components/Footer/Footer';
import Nav from './components/Header/Nav/Nav';
import CategoryHeader from './components/Header/CategoryHeader/CategoryHeader';

function App() {
    // Define paths for different categories
    const leatherBagsPath = "/leather-bags";
    const beltsPath = "/belts";
    const walletsPath = "/wallets";

    // Check if there is a preferred category in localStorage when the app starts
    const defaultCategory = localStorage.getItem('selectedCategory') || 'LEATHER BAGS';
    const [selectedCategory, setSelectedCategory] = useState(defaultCategory);

    // Handle category selection
    const handleCategoryClick = (category) => {
        setSelectedCategory(category);
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
            {/* Header section */}
            <div className='header__wrapper-sticky'>
                <Header />
                <Nav onCategoryClick={handleCategoryClick} selectedCategory={selectedCategory} />
            </div>

            {/* Category header */}
            <CategoryHeader category={selectedCategory} />

            {/* Product section */}
            <div className='product__wrapper'>
                <Routes>
                    {/* Route for leather bags */}
                    <Route path={leatherBagsPath} element={<Products selectedCategory={selectedCategory} />} />

                    {/* Route for belts */}
                    <Route path={beltsPath} element={<Products selectedCategory={selectedCategory} />} />

                    {/* Route for wallets */}
                    <Route path={walletsPath} element={<Products selectedCategory={selectedCategory} />} />

                    {/* Route for other leather products */}
                    {/*<Route path={leatherProductsPath} element={<Products selectedCategory={selectedCategory} />} />*/}
                </Routes>
            </div>

            {/* Footer */}
            <Footer />
        </Router>
    );
}

export default App;
