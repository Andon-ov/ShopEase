import ProductCard from './ProductCard/ProductCard';
import * as storeServices from '../../services/storeServices';
import { createContext, useEffect, useState } from 'react';

import './Products.css'
// import {useContext} from 'react';
// import {ProductsContext} from '../../context/ProductsProvider'


function Products() {
    // const {productsData} = useContext(ProductsContext);
    const [products, setProducts] = useState([]);

    useEffect(() => {

        storeServices.getAll()
            .then((products) => {
                setProducts(products);
            })
            .catch((error) => console.log(error));
    }, []);

    return (
        <section className='main' >
            <h2>Main</h2>
            <div className='products__grid'>
            {products?.map((product) => (
                <ProductCard  key={product.id} product={product} />
            ))}
            </div>
        </section>
    )
};
export default Products;