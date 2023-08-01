const baseUrl = 'http://localhost:8000';

// Handle errors with the response handler function from Fetch
const handleResponse = (response) => {
    if (!response.ok) {
        throw new Error('Network response was not ok.');
    }
    return response.json();
};

// get all products from server
export const getAll = async () => {
    try {
        const response = await fetch(`${baseUrl}/products/`);
        return handleResponse(response);
    } catch (error) {
        console.error('Error fetching products:', error);
        throw error;
    }
};

// get products details
export const getOne = async (productId) => {
    try {
        const response = await fetch(`${baseUrl}/products/${productId}/`);
        return handleResponse(response);
    } catch (error) {
        console.error('Error fetching product details:', error);
        throw error;
    }
};

export const getAllCategories = async () => {
    try {
        const response = await fetch(`${baseUrl}/categories/`);
        return handleResponse(response);
    } catch (error) {
        console.error('Error fetching categories:', error);
        throw error;
    }
};
