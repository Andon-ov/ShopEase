import { createContext, useEffect, useState } from 'react';

import * as storeServices from '../services/storeServices';

export const ProductsContext = createContext([]);


export const ProductsProvider = ({ children }) => {
    const [products, setProducts] = useState([]);

    useEffect(() => {

        storeServices.getAll()
            .then((products) => {
                setProducts(products);
            })
            .catch((error) => console.log(error));
    }, []);

    return (<ProductsContext.Provider value={{ products }}>
        {children}
    </ProductsContext.Provider>);
};
