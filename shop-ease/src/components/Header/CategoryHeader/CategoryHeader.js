import './CategoryHeader.css';
import React, {useEffect, useState} from 'react';
import * as storeServices from '../../../services/storeServices';

function CategoryHeader({category}) {
    const [categories, setCategories] = useState([]);
    const [loading, setLoading] = useState(true);
    const [activeCategoryInfo, setActiveCategoryInfo] = useState(null);

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

    useEffect(() => {
        const activeCategory = categories.find((cat) => cat.name === category);
        setActiveCategoryInfo(activeCategory);
    }, [category, categories]);

    return (<div className='category__header'>
            <h2 className='header__title'>{category}</h2>
            {loading && <p>Loading...</p>}
            {activeCategoryInfo && (<p className='header__descriptions'>{activeCategoryInfo.description}</p>)}
        </div>);
}

export default CategoryHeader;
