import './CategoryHeader.css';
import React, {useEffect, useState} from 'react';
import * as storeServices from '../../services/storeServices';

function CategoryHeader({category}) {
    const defaultCategory = 'LEATHER BAGS';
    const activeCategory = category || defaultCategory;

    const [categories, setCategories] = useState([]);

    useEffect(() => {
        storeServices.getAllCategories()
            .then((data) => {
                setCategories(data);
            })
            .catch((error) => console.log(error));
    }, []);

    const activeCategoryInfo = categories.find((category) => category.name === activeCategory);

    return (
        <div className='category__header'>
            <h2 className="header__title">{activeCategory}</h2>
            {activeCategoryInfo && (
                <p className='header__descriptions'>{activeCategoryInfo.description}</p>
            )}
        </div>
    );
}

export default CategoryHeader;
