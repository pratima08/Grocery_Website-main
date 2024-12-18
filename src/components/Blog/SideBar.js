// Sidebar.js
import React from 'react';


const Sidebar = () => {
  const categories = ['Apple', 'Huawei', 'Samsung', 'Sony'];
  const products = [
    { name: 'Village Tomato', price: '$9.99' },
    { name: 'Red Apple', price: '$11.99' },
    // Add more products
  ];
  const recentPosts = [
    'Crisp veggies bring vibrant health',
    'Juicy fruits, nature’s sweet delight',
    // Add more recent posts
  ];

  return (
    <aside className="sidebar">
      <div className="categories">
        <h4>Categories</h4>
        <ul>
          {categories.map((category, index) => (
            <li key={index}>{category}</li>
          ))}
        </ul>
      </div>

      <div className="products">
        <h4>Products</h4>
        <ul>
          {products.map((product, index) => (
            <li key={index}>
              {product.name} - <strong>{product.price}</strong>
            </li>
          ))}
        </ul>
      </div>

      <div className="recent-posts">
        <h4>Recent Posts</h4>
        <ul>
          {recentPosts.map((post, index) => (
            <li key={index}>{post}</li>
          ))}
        </ul>
      </div>
    </aside>
  );
};

export default Sidebar;
