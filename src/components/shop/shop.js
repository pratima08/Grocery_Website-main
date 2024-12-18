import React, { useState, useEffect } from "react";
import styled from "styled-components";
import {
  FaAppleAlt,
  FaBreadSlice,
  FaFish,
  FaCarrot,
  FaCheese,
  FaEgg,
} from "react-icons/fa";
import { Link } from "react-router-dom";
import "./shop.css";
import axios from "axios";

const Shop = () => {
  const categories = [
    { id: 1, name: "Fruits", icon: <FaAppleAlt />, count: 20 },
    { id: 2, name: "Grocery", icon: <FaBreadSlice />, count: 15 },
    { id: 3, name: "Prepared & Deli", icon: <FaCheese />, count: 12 },
    { id: 4, name: "Seafood & Meat", icon: <FaFish />, count: 8 },
    { id: 5, name: "Vegetables", icon: <FaCarrot />, count: 22 },
    { id: 6, name: "Dairy", icon: <FaEgg />, count: 10 },
  ];

  const products = [
    {
      id: 1,
      name: "Daily Fresh Eggs",
      price: "Rs.17.99",
      discount: "21%",
      image: "https://via.placeholder.com/100",
    },
    {
      id: 2,
      name: "Fresh Bananas",
      price: "Rs.29.99",
      discount: "15%",
      image: "https://via.placeholder.com/100",
    },
    {
      id: 3,
      name: "Forest Honey",
      price: "Rs.19.99",
      discount: "10%",
      image: "https://via.placeholder.com/100",
    },
    {
      id: 4,
      name: "Green Bell Pepper",
      price: "Rs.9.99",
      discount: "8%",
      image: "https://via.placeholder.com/100",
    },
  ]; /*
const ProductStatus = [
  {
    id: 1,
    title: "Daily fresh eggs",
    price: 11.99,
    discount: 33,
    avatar: "https://via.placeholder.com/150",
  },
];*/
  const [productData, setProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await axios.get(
          "http://localhost:2024/api/admin/products"
        ); // Adjust URL as needed
        setProducts(response.data); // Assuming response.data is an array of products
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    };

    fetchProducts();
  }, []);
  // State to handle collapse functionality for each filter
  // const [expanded, setExpanded] = useState({});

  // const toggleExpand = (section) => {
  //  setExpanded((prev) => ({ ...prev, [section]: !prev[section] }));
  // };

  return (
    <Container>
      <Header>
        <h1>ALL PRODUCTS</h1>
        <nav>
          <Link href="#" className="linking">
            Home
          </Link>{" "}
          |{" "}
          <Link href="#" className="linkingtext">
            Shop
          </Link>
        </nav>
      </Header>

      <CategorySection>
        {categories.map((cat) => (
          <Category key={cat.id}>
            <IconWrapper>
              {cat.icon}
              <ItemCount>{cat.count}</ItemCount>
            </IconWrapper>
            <span>{cat.name}</span>
          </Category>
        ))}
      </CategorySection>

      <MainContent>
        <Sidebar>
          {/* Sidebar Filters */}

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
              <div className="productcard">Village Tomato - Rs. 16.99</div>
              <div className="productcard">Village Tomato - Rs. 16.99</div>
              <div className="productcard">Village Tomato - Rs.16.99</div>
              <div className="productcard">Village Tomato - Rs. 16.99</div>
              <div className="productcard">Village Tomato - Rs.16.99</div>
            </aside>
          </div>
        </Sidebar>
        <div className="fast-filters">
          <div className="inlineoption">
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
          <div className="sorting">
            <span>Showing 1-20 of {products.length} results</span>
            <select className="sortdedault">
              <option>Sort by Default</option>
              <option>Price Low to High</option>
              <option>Price High to Low</option>
            </select>
          </div>

          <div className="product-grid">
            {productData.map((product) => (
              <div key={product.id} className="product-card">
                <div className="sale-badge">{product.discount}% OFF</div>
                <img
                  src={product.avatar}
                  alt={product.name}
                  className="product-image"
                />
                <h3>{product.name}</h3>
                <div className="price">
                  {/*<span className="old-price">${product.oldPrice}</span>*/}
                  <span className="new-price">Rs.{product.price}</span>
                </div>
                {/*<div className="tags">
                  {product.tags.map((tag, index) => (
                    <span key={index} className="tag">
                      {tag}
                    </span>
                  ))}
                </div>*/}
                <button className="add-to-cart">Add to Cart</button>
              </div>
            ))}
          </div>
        </div>
      </MainContent>
      <LoadMoreButton>Load More</LoadMoreButton>
    </Container>
  );
};

// Styled Components
const Container = styled.div`
  font-family: Arial, sans-serif;
  color: #333;
  margin-top: 100px;
`;

const Header = styled.header`
  text-align: center;
  padding: 1rem;
  padding-top: 4rem;
  background-color: #e9e9f4;
`;

const CategorySection = styled.section`
  display: flex;
  justify-content: center;
  gap: 1.5rem;
  padding: 2rem;
  background-color: #e9e9f4;
  border-bottom: 1px solid #ddd;
`;

const Category = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  font-size: 0.9rem;
  color: #555;
`;

const IconWrapper = styled.div`
  position: relative;
  width: 100px;
  height: 100px;
  border-radius: 50%;
  border: 2px solid #fff;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #ffffff;
  margin-bottom: 0.5rem;

  svg {
    font-size: 2rem;
    color: #28a745;
  }
`;

const ItemCount = styled.div`
  position: absolute;
  top: -3px;
  right: 10px;
  width: 20px;
  height: 20px;
  border-radius: 50%;
  background-color: #d32f2f;
  color: #fff;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 0.7rem;
  font-weight: bold;
`;

const MainContent = styled.div`
  display: flex;
  gap: 1.5rem;
  padding: 2rem;
  margin-top: 50px;
`;

const Sidebar = styled.aside`
  flex: 0 0 200px;
`;

/*const FastFiltersCard = styled.div`
  border: 1px solid #ddd;
  padding: 1rem;
  margin-bottom: 1.5rem;
  border-radius: 8px;
  background-color: #f8f8f8;
`;

const FastFiltersTitle = styled.h4`
  font-size: 1rem;
  font-weight: bold;
  margin-bottom: 0.5rem;
`;

const FilterSection = styled.div`
  width: 300px;
  margin-bottom: 2rem;
`;

const FilterTitle = styled.h4`
  font-size: 1rem;
  font-weight: bold;
  display: flex;
  justify-content: space-between;
  align-items: center;
  cursor: pointer;
  padding: 0.5rem 0;
`;

const ToggleButton = styled.span`
  font-size: 1.2rem;
  font-weight: bold;
  color: #777;
`;

const FilterContent = styled.div`
  margin-top: 0.5rem;
  padding-left: 1rem;
`;

const FilterItem = styled.div`
  font-size: 0.9rem;
  color: #555;
  margin: 0.3rem 0;
  padding: 0.3rem 0;
  cursor: pointer;

  &:hover {
    color: #28a745;
    font-weight: bold;
  }
`;
const ProductGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  gap: 1.5rem;
  flex: 1;
`;

const ProductCard = styled.div`
  border: 1px solid #ddd;
  border-radius: 8px;
  overflow: hidden;
  background-color: #fff;
  box-shadow: 0px 4px 12px rgba(0, 0, 0, 0.1);
  text-align: center;
`;

const ProductImage = styled.img`
  width: 100%;
  height: auto;
`;

const ProductInfo = styled.div`
  padding: 1rem;
`;

const ProductTitle = styled.h3`
  font-size: 1rem;
  color: #333;
`;

const ProductPrice = styled.p`
  font-size: 1.1rem;
  font-weight: bold;
  color: #28a745;
`;

const Discount = styled.span`
  display: inline-block;
  margin-top: 0.5rem;
  padding: 0.2rem 0.5rem;
  background-color: #ffdddd;
  color: #d32f2f;
  border-radius: 4px;
  font-size
`;*/

const LoadMoreButton = styled.button`
  margin: 2rem auto;
  display: block;
  padding: 0.8rem 1.5rem;
  background-color: #28a745;
  color: #fff;
  font-size: 1rem;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  font-weight: bold;
`;
export default Shop;
