import React, { useState } from 'react';

import './joshwcomeau.css';
import './App.css';

import Header from './components/Header/Header';
import FilteringComponent from './components/Aside/FilteringComponent';
import Products from './components/Main/Products';
import Footer from './components/Footer/Footer';
import Nav from './components/Nav/Nav';
import CategoryHeader from './components/Header/CategoryHeader';

function App() {
  const [selectedCategory, setSelectedCategory] = useState(null);

  const handleCategoryClick = (category) => {
    setSelectedCategory(category);
  };

  return (
    <>
      <div className='sticky'>
        <Header />
        <Nav onCategoryClick={handleCategoryClick} selectedCategory={selectedCategory} />

      </div>
      <CategoryHeader category={selectedCategory} />
      <div className='wrapper'>
        <FilteringComponent />
        <Products selectedCategory={selectedCategory} />
      </div>
      <Footer />
    </>
  );
}

export default App;
