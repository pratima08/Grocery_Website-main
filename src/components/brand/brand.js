import React, { useState } from 'react';
import './brand.css';

const Brand = () => {
  // State for filters and products
  const [products] = useState([
    // Define a sample list of products here
    { id: 1, name: "Daily Fresh Eggs", price: 11.99, discount: 33, inStock: true, category: "Dairy", },
    { id: 2, name: "Fresh Banana", price: 100.00, discount: 50, inStock: true, category: "Fruits" },
    { id: 3, name: "Fresh Cheese", price: 41.99, discount: 14, inStock: true, category: "Dairy" },
    // Add more products as needed
  ]);
  const ProductStatus = [
    {
      id: 1,
      title: 'Daily fresh eggs',
      oldPrice: 17.99,
      newPrice: 11.99,
      discount: 33,
      imgUrl: 'https://via.placeholder.com/150',
      tags: ['Organic', 'Glutenfree'],
    },
    {
      id: 2,
      title: 'Daily fresh milk',
      oldPrice: 39.99,
      newPrice: 29.99,
      discount: 25,
      imgUrl: 'https://via.placeholder.com/150',
      tags: ['Certified', 'Fresh'],
    },
    {
      id: 3,
      title: 'Delicious watermelon',
      oldPrice: 33.49,
      newPrice: 29.49,
      discount: 12,
      imgUrl: 'https://via.placeholder.com/150',
      tags: [],
    },
    {
      id: 4,
      title: 'Forest honey',
      oldPrice: 11.99,
      newPrice: 9.99,
      discount: 17,
      imgUrl: 'https://via.placeholder.com/150',
      tags: ['Certified', 'Organic'],
    },
    {
      id: 5,
      title: 'Fresh Banana',
      oldPrice: 199.99,
      newPrice: 100.00,
      discount: 50,
      imgUrl: 'https://via.placeholder.com/150',
      tags: ['Organic Farming'],
    },
  ];


  return (
    <div className="app">
      {/* Header Section */}
      <header className="header">
        <img src="logo.png" alt="Driscoll's Logo" className="logo" />
        <nav className="categories">
          {["Fruits", "Grocery", "Prepared & Deli", "Seafood & Meat", "Vegetables"].map(category => (
            <div key={category} className="category">
              <img src={`${category.toLowerCase()}.png`} alt={category} />
              <span>{category}</span>
            </div>
          ))}
        </nav>
      </header>

      {/* Sidebar Filters */}
      <div className='maincontent'>
        <div>
      <aside className="sidebar">
        <h3>Product Categories</h3>
        <ul className="category-list">
          <li>All Products</li>
          <li>Dairy</li>
          <li>Fruits</li>
          <li>Vegetables</li>
          <li>Seafood & Meat</li>
        </ul>

        <h3>Discount Filter</h3>
        <ul className="discount-filter">
          <li>10% Off or More</li>
          <li>20% Off or More</li>
          <li>30% Off or More</li>
        </ul>

        <h3>Search Products</h3>
        <input type="text" placeholder="Search..." />

        <h3>Filter by Price</h3>
        <input type="range" min="0" max="260" />

        <h3>Filter by Attributes</h3>
        <select>
          <option>Select Colors</option>
        </select>
        <select>
          <option>Select KG</option>
        </select>

        <h3>Product Status</h3>
        <div>
          <input type="checkbox" /> In Stock
        </div>
        <div>
          <input type="checkbox" /> On Sale
        </div>

        <h3>Featured Products</h3>
      </aside>
      </div>
      {/* Main Content */}
      <div>
      <main className="main-content">
        {/* Filter and Sorting Options */}
        <div className="filter-bar">
        <div className='inlineoption'>
            <button className="filter-button">
              <span className="icon">🌟</span> Featured
            </button>
            <button className="filter-button">
              <span className="icon">🔥</span> Best Sellers
            </button>
            <button className="filter-button">
              <span className="icon">🎉</span> Top Rated
            </button>
            <button className="filter-button">Select Brands</button>
            <button className="filter-button">Select Colors</button>
            <button className="filter-button">Select Sizes</button>
          </div>
        </div>
        <div className="sort-options">
            <select>
                <option>Select Colors</option>
                <option>Red</option>
                <option>Red</option>
            </select>
            <select>
                <option>Select Brands</option>
                <option>Red</option>
                <option>Red</option>
            </select>
            <select>
                <option>Select Kg</option>
                <option>Red</option>
                <option>Red</option>
            </select>
            <button>Filter</button>
          </div>
          <div className='sorting'>
          <span>Showing 1-20 of {products.length} results</span>
            <select className='sortdedault'>
              <option>Sort by Default</option>
              <option>Price Low to High</option>
              <option>Price High to Low</option>
            </select>
            </div>
        {/* Products Grid */}
        <div className="product-grid">
            {ProductStatus.map((product) => (
              <div key={product.id} className="product-card">
                <div className="sale-badge">{product.discount}% OFF</div>
                <img src={product.imgUrl} alt={product.title} className="product-image" />
                <h3>{product.title}</h3>
                <div className="price">
                  <span className="old-price">${product.oldPrice}</span>
                  <span className="new-price">${product.newPrice}</span>
                </div>
                <div className="tags">
                  {product.tags.map((tag, index) => (
                    <span key={index} className="tag">{tag}</span>
                  ))}
                </div>
                <button className="add-to-cart">Add to Cart</button>
              </div>
            ))}
          </div>

        {/* Load More Button */}
        <button className="load-more">Load More</button>
      </main>
      </div>
      </div>
    </div>
  );
};

export default Brand;
