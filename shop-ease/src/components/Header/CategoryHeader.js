import './CategoryHeader.css';
import React, {useEffect, useState} from 'react';
import * as storeServices from '../../services/storeServices';

function CategoryHeader({category}) {

    const [categories, setCategories] = useState([]);

    useEffect(() => {
        storeServices.getAllCategories()
            .then((data) => {
                setCategories(data);
            })
            .catch((error) => console.log(error));
    }, []);

    const activeCategoryInfo = categories.find((cat) => cat.name === category);


    return (
        <div className='category__header'>
            <h2 className="header__title">{category}</h2>
            {activeCategoryInfo && (
                <p className='header__descriptions'>{activeCategoryInfo.description}</p>
            )}
        </div>
    );
}

export default CategoryHeader;
