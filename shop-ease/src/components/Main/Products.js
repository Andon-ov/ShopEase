import React, {useEffect, useState} from 'react';

import {Slider} from 'antd';

import ColorFilter from './ColorFilter';

import SortingDropdown from './../Main/SortingDropdown/SortingDropdown';
import ProductCard from './ProductCard/ProductCard';
import * as storeServices from '../../services/storeServices';

import './Products.css';

function Products({selectedCategory}) {
    // State to store the products fetched from the API
    const [products, setProducts] = useState([]);

    // State to store the currently selected color
    const [selectedColor, setSelectedColor] = useState('');


    // State to keep track of the number of products displayed in the grid
    const [loadCount, setLoadCount] = useState(9);

    // Number of products to load per "Load More" click
    const productsPerLoad = 9;

    // State to store the currently selected sorting option
    const [sortingOption, setSortingOption] = useState('name-asc');


    // State to store the min and max price values for the slider
    const [selectedPriceRange, setSelectedPriceRange] = useState([0, 1000]);


    // Function to handle price slider change
    const handlePriceSliderChange = (values) => {
        setSelectedPriceRange(values);
    };


    // Fetch the products from the API on component mount
    useEffect(() => {
        storeServices.getAll()
            .then((products) => {

                // I did mapping on the categories because I created the app this way and then I changed the base
                const categoryMapping = {
                    1: 'LEATHER BAGS', 2: 'BELTS', 3: 'WALLETS', 4: 'LEATHER PRODUCTS',
                };
                const productsWithTextCategory = products.map((product) => ({
                    ...product, category: categoryMapping[product.category],
                }));

                setProducts(productsWithTextCategory);
            })
            .catch((error) => console.log(error));
    }, []);


    // Default category to be shown when no category is selected
    const defaultCategory = 'LEATHER BAGS';

    // Filter the products based on the selected category, selected color, and selected price range
    const filteredProducts = products.filter((product) => {
        const isCategoryMatch = selectedCategory ? product.category === selectedCategory : product.category === defaultCategory;

        const isColorMatch = selectedColor ? product.product_color === selectedColor : true;

        let price;
        if ('discounted_price' in product && product.discounted_price !== null) {
            price = parseFloat(product.discounted_price);
        } else {
            price = parseFloat(product.price);
        }

        // Handle cases with null or invalid prices
        if (isNaN(price) || price === null) return false;

        const isPriceMatch = price >= selectedPriceRange[0] && price <= selectedPriceRange[1];

        return isCategoryMatch && isColorMatch && isPriceMatch;
    });


    useEffect(() => {
        setSelectedColor('');
        setSelectedPriceRange([0, 1000]);
    }, [selectedCategory]);


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
                    let priceA, priceB;
                    if ('discounted_price' in a && a.discounted_price !== null) {
                        priceA = parseFloat(a.discounted_price);
                    } else {
                        priceA = parseFloat(a.price);
                    }
                    if ('discounted_price' in b && b.discounted_price !== null) {
                        priceB = parseFloat(b.discounted_price);
                    } else {
                        priceB = parseFloat(b.price);
                    }

                    // Handle cases with null or invalid prices
                    if (isNaN(priceA) || priceA === null) return -1;
                    if (isNaN(priceB) || priceB === null) return 1;

                    return direction === 'asc' ? priceA - priceB : priceB - priceA;
                });

                break;
            default:
                break;
        }
        // sortedProducts.forEach(x => console.log(x.discounted_price, x.price))
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


    // Function to retrieve a valid price from the product
    const getPriceFromProduct = (product) => {
        if ('discounted_price' in product && product.discounted_price !== null) {
            return parseFloat(product.discounted_price);
        } else if ('price' in product && product.price !== null) {
            return parseFloat(product.price);
        }
        return null;
    };

// Calculate the valid prices from all products
    const validPrices = filteredProducts
        .map((product) => getPriceFromProduct(product))
        .filter((price) => !isNaN(price) && price !== null);

    // Calculate minimum and maximum price
    const minPrice = Math.min(...validPrices);
    const maxPrice = Math.max(...validPrices);

// Set bounds for the slider
    const sliderMin = isNaN(minPrice) ? 0 : minPrice;
    const sliderMax = isNaN(maxPrice) ? 1000 : maxPrice;


    console.log(` function minPrice ${minPrice} maxPrice ${maxPrice}`)
    // sortedProducts.forEach(x => console.log(`Products in this category discounted_price ${x.discounted_price} price${x.price}`))

    return (<section className='products'>
        {/* Sorting dropdown component */}
        <div className='products__sort'>
            <SortingDropdown onSortChange={handleSortChange}/>
        </div>

        {/* Price filter with slider */}
        <div className='products__price-filter'>
            <h3>Price Range:</h3>

            <Slider
                range
                min={0}
                max={600}
                step={10}
                value={selectedPriceRange}
                onChange={handlePriceSliderChange}
            />


            {/* Display the selected price range */}
            <span>{`Price: ${selectedPriceRange[0]} - ${selectedPriceRange[1]}`}</span>
        </div>

        {/* Color filter with radio buttons */}
        <ColorFilter
            colors={colorOptions}
            selectedColor={selectedColor}
            onColorChange={handleColorChange}
        />

        {/* Product grid */}
        <div className='products__grid'>
            {displayedProducts?.map((product) => (<ProductCard key={product.id} product={product}/>))}
        </div>

        {/* "Load More" button */}
        <div className='products__button'>
            {displayedProducts.length < sortedProducts.length && (
                <button className='loadMoreBtn' onClick={handleLoadMoreClick}>Load More</button>)}
        </div>
    </section>);
}

export default Products;


