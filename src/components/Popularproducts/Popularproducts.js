// src/App.js
import React from "react";
import {
  FaArrowRight,
  FaCartPlus,
  FaEye,
  FaBalanceScale,
} from "react-icons/fa";
import "./Popularproducts.css";

function Popularproducts() {
  const products = [
    {
      id: 1,
      name: "Village Tomato",
      originalPrice: 11.99,
      discountedPrice: 7.99,
      discount: 33,
      sale: true,
      stockStatus: "IN STOCK",
      tags: ["Organic", "Free Shipping"],
      sku: "B1C2D3A4",
      image:
        "https://cdndailyexcelsior.b-cdn.net/wp-content/uploads/2023/07/TOMATO-1-scaled.jpg",
    },
    {
      id: 2,
      name: "Organic Cucumber",
      originalPrice: 25.99,
      discountedPrice: 21.99,
      discount: 15,
      sale: true,
      stockStatus: "ON BACK ORDER",
      tags: ["Fast Delivery", "Gluten Free"],
      sku: "B5C6D7A8",
      image:
        "https://www.greendna.in/cdn/shop/products/cucumber_1_1024x1024@2x.jpg?v=1594219681",
    },
    {
      id: 3,
      name: "Red Apple",
      originalPrice: 162.99,
      discountedPrice: 151.99,
      discount: 7,
      sale: true,
      stockStatus: "IN STOCK",
      tags: ["Organic"],
      sku: "D5A6B7C8",
      image:
        "https://thumbs.dreamstime.com/z/red-apple-fruit-half-green-leaf-isolated-white-ripe-background-apples-clipping-path-98166062.jpg?ct=jpeg",
    },
    {
      id: 4,
      name: "Green Bell Pepper",
      originalPrice: 89.99,
      discountedPrice: 120.99,
      discount: 1,
      sale: true,
      stockStatus: "IN STOCK",
      tags: ["Organic", "Free Shipping"],
      sku: "E3F4G5H6",
      image:
        "https://thumbs.dreamstime.com/z/bell-peppers-collection-different-color-pepper-vector-illustration-51779254.jpg?ct=jpeg",
    },
  ];

  const tagColors = {
    Organic: "#28a745",
    "Free Shipping": "#ff6f61",
    "Fast Delivery": "#007bff",
    "Gluten Free": "#6f42c1",
    "Non-GMO": "#fd7e14",
    "Dairy-Free": "#ffc107",
  };
  return (
    <div className="categories-container">
      <div className="main-content">
        <header className="main-header">
          <h2>Popular Products</h2>
          <nav className="nav-menu">
            <span className="firsttext">All PRODUCTS</span>
            <span></span>FEATURED
            <span>BEST SELLERS</span>
            <span>TOP RATED</span>
            <span>ON SALE</span>
            <span>IN STOCK</span>
          </nav>
          <button className="category-button">
            Check All <FaArrowRight className="arrow-icon" />
          </button>
        </header>

        {/* Product Grid */}
        <div className="product-grid">
          {products.map((product) => (
            <div key={product.id} className="product-card">
              {product.sale && <div className="sale-badge">SALE!</div>}
              <div className="discount-badge">{product.discount}%</div>
              <img
                src={product.image}
                alt={product.name}
                className="product-image"
              />
              <h4>{product.name}</h4>
              <div className="price-section">
                <span className="original-price">Rs.{product.originalPrice}</span>
                <span className="discounted-price">
                  Rs.{product.discountedPrice}
                </span>
              </div>
              <div className="stock-status">{product.stockStatus}</div>
              <div className="tags">
                {product.tags.map((tag) => (
                  <span
                    key={tag}
                    className="tag"
                    style={{ backgroundColor: tagColors[tag] || "#ddd" }}
                  >
                    {tag}
                  </span>
                ))}
              </div>
              <div className="sku">SKU: {product.sku}</div>

              {/* Action Buttons (Visible on Hover) */}
              <div className="action-buttons">
                <button className="action-btn">
                  <FaCartPlus />
                </button>
                <button className="action-btn">
                  <FaBalanceScale />
                </button>
                <button className="action-btn">
                  <FaEye />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Popularproducts;
