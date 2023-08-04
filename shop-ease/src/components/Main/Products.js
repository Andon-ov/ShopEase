// Built-in modules or libraries
import React, {useEffect, useState} from 'react';

// Third-party libraries
import InputSlider from 'react-input-slider';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowDown, faBars, faXmark,faPlus } from '@fortawesome/free-solid-svg-icons';

// Local components and modules
import ColorFilter from './ColorFilter/ColorFilter';
import SortingDropdown from './../Main/SortingDropdown/SortingDropdown';
import ProductCard from './ProductCard/ProductCard';
import * as storeServices from '../../services/storeServices';

// Stylesheets (if applicable)
import './Products.css';

function Products({selectedCategory}) {

    // State to store the products fetched from the API
    const [products, setProducts] = useState([]);

    // Counter for the number of products in the grid
    const [productsInGrid, setProductsInGrid] = useState(0);

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


    // Set filters visible and invisible
    const [filtersVisible, setFiltersVisible] = useState(true);
    const handleFilterToggle = () => {
        setFiltersVisible(!filtersVisible);
    };

    // State to track whether to activate the event handler
    const [isResponsive, setIsResponsive] = useState(window.innerWidth <= 1279);

    // Event handler function
    const handleResize = () => {
        setIsResponsive(window.innerWidth <= 1279);
    };

    // Attach the event listener on component mount
    useEffect(() => {
        window.addEventListener('resize', handleResize);

        // Remove the event listener on component unmount
        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    // Use the isResponsive state to conditionally apply logic
    useEffect(() => {
        if (isResponsive) {
            // Code to execute when in responsive mode
            setFiltersVisible(false)
            // You can activate the event handler or perform any other actions here
        } else {
            // Code to execute when not in responsive mode
            setFiltersVisible(true)

            // You can deactivate the event handler or perform other actions here
        }
    }, [isResponsive], setFiltersVisible);

    //  Set filters visible and invisible ----------------------------------------

    // Load more start here -----------------------------------------------------------------------------------------

    // State to keep track of the number of products displayed in the grid
    const [loadCount, setLoadCount] = useState(9);

    // Number of products to load per "Load More" click
    const productsPerLoad = 9;

    // Function to handle "Load More" button click
    const handleLoadMoreClick = () => {
        setLoadCount((prevLoadCount) => prevLoadCount + productsPerLoad);
    };

    // Fetch the products from the API on component mount and whenever the category changes
    useEffect(() => {
        // Reset loadCount to the initial value (9) whenever the category changes
        setLoadCount(9);
    }, [selectedCategory]);

    // Load more end here -------------------------------------------------------------------------------------------


    // filters start here! -------------------------------------------------------------------------------------------

    // State to store the currently selected color
    const [selectedColor, setSelectedColor] = useState('');

    // State to store the min and max price values for the slider
    const defaultCategoryMaxPrice = 250
    const defaultCategoryMinPrice = 0

    // State to store the min and max price values for the slider
    const [selectedPriceRange, setSelectedPriceRange] = useState([defaultCategoryMinPrice, defaultCategoryMaxPrice]);


    // Function to reset filters
    const handleResetFilters = () => {
        setSelectedColor(''); // Reset selected color
        setSelectedPriceRange([defaultCategoryMinPrice, sliderMax]); // Reset selected price range
    };


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

    // wen change category reset the filter
    useEffect(() => {
        setSelectedColor('');
        setSelectedPriceRange([defaultCategoryMinPrice, defaultCategoryMaxPrice]);
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
    const sliderMin = isNaN(minPrice) ? minPrice : defaultCategoryMinPrice;
    const sliderMax = isNaN(maxPrice) ? maxPrice : defaultCategoryMaxPrice;


    // console.log(` function minPrice ${minPrice} maxPrice ${maxPrice}`)
    // sortedProducts.forEach(x => console.log(`Products in this category discounted_price ${x.discounted_price} price${x.price}`))


    // Filters end here! -------------------------------------------------------------------------------------------


    // Sorting end here! -------------------------------------------------------------------------------------------
    // State to store the currently selected sorting option
    const [sortingOption, setSortingOption] = useState('name-asc');

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


    // count products:
    useEffect(() => {
        // Update the product counters whenever displayedProducts or sortedProducts change
        setProductsInGrid(displayedProducts.length);
    }, [displayedProducts, sortedProducts]);


    return (
        <main className='products'>

            {/*Filters*/}
            <aside className='filters'>

                <div className='filters__sticky'>

                    {/*<div className="filters__menu">*/}
                    {/*    <button id="filters__toggle" onClick={handleFilterToggle}>*/}
                    {/*        filters*/}
                    {/*        /!*<FontAwesomeIcon icon={faBars}/>*!/*/}
                    {/*    </button>*/}
                    {/*</div>*/}



                    <div className={`filters__wrapper ${filtersVisible ? '' : 'hidden'}`}>
                        <div className="filters__menu-close">
                            <button id="filters__toggle-close" onClick={handleFilterToggle}>
                                <FontAwesomeIcon icon={faXmark}/>
                            </button>
                        </div>
                        <div className="filters_head">
                            <h3>FILTER</h3>
                            <button className='resetFiltersBtn' onClick={handleResetFilters}>
                                Reset x
                            </button>
                        </div>

                        {/* Price filter with react-input-slider */}
                        <h3>Price Range:</h3>

                        <InputSlider
                            axis='x'
                            x={selectedPriceRange[0]} // Set the x value to the starting value
                            xmin={defaultCategoryMinPrice}
                            xmax={maxPrice}
                            xstep={10}
                            onChange={(position) => setSelectedPriceRange([position.x, selectedPriceRange[1]])}
                            // Update the selectedPriceRange with the new value of the slider
                        />
                        <br/>


                        {/* Display the selected price range */}
                        <span>{`Price: ${selectedPriceRange[0]} - ${selectedPriceRange[1]}`}</span>

                        {/* Color filter with radio buttons */}

                        <ColorFilter
                            colors={colorOptions}
                            selectedColor={selectedColor}
                            onColorChange={handleColorChange}
                        />
                        {/* Reset Filters button */}
                        <div className="button__wrapper">

                            <button className='close__button' onClick={handleFilterToggle}>
                                <div className='products__counters--mobile'>
                                    <span>Show results&nbsp;:  {productsInGrid}</span>
                                </div>
                            </button>
                        </div>

                        {/* Display product counters */}
                        <div className='products__counters'>
                            <span>Show results&nbsp;:  {productsInGrid}</span>
                        </div>
                    </div>
                </div>


            </aside>


            {/* Product grid */}
            <section className="grid__wrapper">

                {/* Sorting dropdown component */}
                <div className='products__sort'>
                    <button id="filters__toggle" onClick={handleFilterToggle}>
                       Filters
                        {/*<FontAwesomeIcon icon={faBars}/>*/}
                    </button>
                    <SortingDropdown onSortChange={handleSortChange}/>

                </div>


                <div className='products__grid'>
                    {displayedProducts?.map((product) => (<ProductCard key={product.id} product={product}/>))}
                </div>
                {/* "Load More" button */}
                <div className='products__button'>
                    {displayedProducts.length < sortedProducts.length && (
                        <button className='loadMoreBtn' onClick={handleLoadMoreClick}>Load More &nbsp;<FontAwesomeIcon
                            icon={faArrowDown}/>
                        </button>)}
                </div>
            </section>


        </main>);
}

export default Products;


