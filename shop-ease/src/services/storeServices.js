const url = 'http://localhost:8000/';


// get all products from server

export const getAll = () => {
    return fetch(url + '/products/')
        .then((res) => res.json());

};


// get products details
export const getOne = (productsId) => {
    return fetch(`${url}/products/${productsId}/`)
        .then((res) => res.json());
};

export const getAllCategories = () => {
    return fetch(`${url}/categories/`)
        .then((res) => res.json());
};
