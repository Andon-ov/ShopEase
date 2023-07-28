import React, { useEffect, useState } from 'react';

function Categories() {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    fetch('http://localhost:8000/categories/')
      .then(response => response.json())
      .then(data => {
        console.log(data);
        setCategories(data.categories);
      })
      .catch(error => console.log(error));
  }, []);

  return (
    <div>
      <h2>Categories</h2>
      <ul>
        {categories.map(category => (
          <li key={category.id}>
            <h3>{category.name}</h3>
            <p>{category.description}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Categories;
