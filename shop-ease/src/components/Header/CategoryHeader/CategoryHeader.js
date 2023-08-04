// Import CSS styles for the component
import './CategoryHeader.css';

// Import necessary dependencies from React
import React, { useEffect, useState } from 'react';

// Import storeServices for fetching data
import * as storeServices from '../../../services/storeServices';

// CategoryHeader component
function CategoryHeader({ category }) {
    // State to manage categories and loading status
    const [categories, setCategories] = useState([]);
    const [loading, setLoading] = useState(true);

    // State to store active category information
    const [activeCategoryInfo, setActiveCategoryInfo] = useState(null);

    // Fetch all categories from the storeServices
    useEffect(() => {
        storeServices
            .getAllCategories()
            .then((data) => {
                setCategories(data);
                setLoading(false);
            })
            .catch((error) => {
                console.log(error);
                setLoading(false);
            });
    }, []);

    // Set active category information when category or categories change
    useEffect(() => {
        const activeCategory = categories.find((cat) => cat.name === category);
        setActiveCategoryInfo(activeCategory);
    }, [category, categories]);

    return (
        <div className='category__header'>
            {/* Display the category title */}
            <h2 className='header__title'>{category}</h2>
            {/* Display loading message if data is being fetched */}
            {loading && <p>Loading...</p>}
            {/* Display category description if activeCategoryInfo is available */}
            {activeCategoryInfo && (
                <p className='header__descriptions'>{activeCategoryInfo.description}</p>
            )}
        </div>
    );
}

export default CategoryHeader;
