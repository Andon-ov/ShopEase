import React, { useEffect, useState } from 'react';

import { Slider } from 'antd';

import ColorFilter from './ColorFilter';

import SortingDropdown from './../Main/SortingDropdown/SortingDropdown';
import ProductCard from './ProductCard/ProductCard';
import * as storeServices from '../../services/storeServices';

import './Products.css';

function Products({ selectedCategory }) {
  // State to store the currently selected color
  const [selectedColor, setSelectedColor] = useState('');


  // State to store the products fetched from the API
  const [products, setProducts] = useState([]);

  // State to keep track of the number of products displayed in the grid
  const [loadCount, setLoadCount] = useState(9);

  // State to store the currently selected sorting option
  const [sortingOption, setSortingOption] = useState('name-asc');

  // Number of products to load per "Load More" click
  const productsPerLoad = 9;

  // State to store the min and max price values for the slider
  const [priceRange, setPriceRange] = useState([0, 1000]); // Default range

  // Function to handle price slider change
  const handlePriceSliderChange = (values) => {
    setPriceRange(values);
  };


  // Fetch the products from the API on component mount
  useEffect(() => {
    storeServices.getAll()
      .then((products) => {

        // I did mapping on the categories because I created the app this way and then I changed the base
        const categoryMapping = {
          1: 'LEATHER BAGS',
          2: 'BELTS',
          3: 'WALLETS',
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



  // // Filter the products based on the selected category or default category
  // const filteredProducts = products.filter((product) =>
  //   selectedCategory ? product.category === selectedCategory : product.category === defaultCategory
  // );


  //  // Filter the products based on the selected category or default category and selected color
  //  const filteredProducts = products.filter((product) => {
  //   const isCategoryMatch = selectedCategory
  //     ? product.category === selectedCategory
  //     : product.category === defaultCategory;

  //   const isColorMatch = selectedColor
  //     ? product.product_color === selectedColor
  //     : true;

  //   return isCategoryMatch && isColorMatch;
  // });

  // Filter the products based on the selected category or default category and selected color
  const filteredProducts = products.filter((product) => {
    const isCategoryMatch = selectedCategory
      ? product.category === selectedCategory
      : product.category === defaultCategory;

    const isColorMatch = selectedColor
      ? product.product_color === selectedColor
      : true;

    return isCategoryMatch && isColorMatch;
  });

  useEffect(() => {
    setSelectedColor('');
  }, [selectedCategory]);



  // Create a function to find all unique colors to filter:
  const getUniqueColors = () => {
    const uniqueColors = [...new Set(filteredProducts.map((product) => product.product_color))];
    return uniqueColors;
  };

  // Get the list of unique colors for the selected category
  const colorOptions = getUniqueColors();


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


  // Function to handle color filter change
  const handleColorChange = (color) => {
    setSelectedColor(color);
  };

  return (
    <section className='products'>
      {/* Sorting dropdown component */}
      <div className='products__sort'>
        <SortingDropdown onSortChange={handleSortChange} />
      </div>

      {/* Price filter with slider */}
      <div className='products__price-filter'>
        <h3>Price Range:</h3>
        <Slider
          range
          min={0}
          max={1000}
          step={10}
          defaultValue={priceRange}
          onChange={handlePriceSliderChange}
        />



        {/* Display the selected price range */}
        <span>{`Price: ${priceRange[0]} - ${priceRange[1]}`}</span>
      </div>

      {/* Color filter with radio buttons */}
      <ColorFilter
        colors={colorOptions}
        selectedColor={selectedColor}
        onColorChange={handleColorChange}
      />

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


