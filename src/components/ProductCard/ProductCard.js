import React from 'react';

const ProductCard = ({ image, title, price }) => (
  <div className="card product-card">
    <img src={image} className="card-img-top" alt={title} />
    <div className="card-body">
      <h5 className="card-title">{title}</h5>
      <p className="card-text">${price}</p>
      <button className="btn btn-outline-primary">Add to Cart</button>
    </div>
  </div>
);

export default ProductCard;
