# ShopEase Django Web App

ShopEase is a Django web application that allows users to browse and purchase various products, including leather bags, belts, wallets, and other leather products. 
The app also provides an admin panel for managing product information.

## Features

- Browse products by category (LEATHER BAGS, BELTS, WALLETS, LEATHER PRODUCTS).
- View product details, including an image, name, color, short description, price, discounted price (if applicable), and ratings.
- Purchase products securely through the checkout process.
- Admin panel for managing products, categories, and other site content.

## Installation

1. Clone the repository:


git clone https://github.com/Andon-ov/ShopEase.git
cd ShopEase

    Set up a virtual environment (optional but recommended):

python -m venv venv

source venv/bin/activate   # On Windows, use `venv\Scripts\activate`

    Install the required dependencies:

pip install -r requirements.txt

    Run the development server:

python manage.py runserver

The app will be available at http://localhost:8000/.
Accessing the Admin Panel

To access the admin panel, go to http://localhost:8000/admin/ in your web browser and log in with the superuser credentials:

Admin username: admin
Admin password: admin


API Endpoints

The app provides RESTful API endpoints for accessing product data. You can access the following endpoints:

    GET /api/products/: Retrieve a list of all products.
    GET /api/products/<id>/: Retrieve details of a specific product.
    POST /api/products/: Create a new product (requires admin authentication).
    PUT /api/products/<id>/: Update details of a specific product (requires admin authentication).
    DELETE /api/products/<id>/: Delete a specific product (requires admin authentication).

This project is licensed under the MIT License - see the LICENSE file for details.



