import React, { useEffect, useState } from 'react';
import SortingDropdown from './../Main/SortingDropdown/SortingDropdown';
import ProductCard from './ProductCard/ProductCard';
import * as storeServices from '../../services/storeServices';

import './Products.css';

function Products({ selectedCategory }) {
  // State to store the products fetched from the API
  const [products, setProducts] = useState([]);

  // State to keep track of the number of products displayed in the grid
  const [loadCount, setLoadCount] = useState(9);

  // State to store the currently selected sorting option
  const [sortingOption, setSortingOption] = useState('name-asc');

  // Number of products to load per "Load More" click
  const productsPerLoad = 9;

  // Fetch the products from the API on component mount
  useEffect(() => {
    storeServices.getAll()
      .then((products) => {

        // I did mapping on the categories because I created the app this way and then I changed the base
        const categoryMapping = {
          1: 'LEATHER BAGS',
          2: 'WALLETS',
          3: 'BELTS',
          4: 'LEATHER PRODUCTS',
        };
        const productsWithTextCategory = products.map((product) => ({
          ...product,
          category: categoryMapping[product.category],
        }));

        setProducts(productsWithTextCategory);
      })
      .catch((error) => console.log(error));
  }, []);


  // Default category to be shown when no category is selected
  const defaultCategory = 'LEATHER BAGS';

  // Filter the products based on the selected category or default category
  const filteredProducts = selectedCategory
    ? products.filter((product) => product.category === selectedCategory)
    : products.filter((product) => product.category === defaultCategory);


  // Function to handle "Load More" button click
  const handleLoadMoreClick = () => {
    setLoadCount((prevLoadCount) => prevLoadCount + productsPerLoad);
  };

  // Function to handle sorting products based on the selected option
  const sortProducts = (products, option) => {
    // Implement the sorting logic based on the selected option
    const [field, direction] = option.split('-');
    const sortedProducts = [...products];

    switch (field) {
      case 'name':
        sortedProducts.sort((a, b) => {
          const nameA = a.name.toLowerCase();
          const nameB = b.name.toLowerCase();
          return direction === 'asc' ? nameA.localeCompare(nameB) : nameB.localeCompare(nameA);
        });
        break;
      case 'price':
        sortedProducts.sort((a, b) => {
          const priceA = parseFloat(a.price);
          const priceB = parseFloat(b.price);
          return direction === 'asc' ? priceA - priceB : priceB - priceA;
        });
        break;
      default:
        break;
    }

    return sortedProducts;
  };

  // Function to handle sorting option change
  const handleSortChange = (option) => {
    setSortingOption(option);
  };

  // Apply sorting to the filtered products
  const sortedProducts = sortProducts(filteredProducts, sortingOption);

  // Displayed products to show in the grid, based on loadCount
  const displayedProducts = sortedProducts.slice(0, loadCount);

  return (
    <section className='products'>
      {/* Sorting dropdown component */}
      <div className='products__sort'>
        <SortingDropdown onSortChange={handleSortChange} />
      </div>

      {/* Product grid */}
      <div className='products__grid'>
        {displayedProducts?.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>

      {/* "Load More" button */}
      <div className='products__button'>
        {displayedProducts.length < sortedProducts.length && (
          <button className='loadMoreBtn' onClick={handleLoadMoreClick}>Load More</button>
        )}
      </div>
    </section>
  );
}

export default Products;


