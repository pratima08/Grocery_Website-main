// src/App.js
import React from "react";
import { FaArrowRight } from "react-icons/fa";

function Review() {
  const reviews = [
    {
      id: 1,
      name: "ADMIN",
      role: "Reviewer",
      rating: 5,
      score: "5/5",
      reviewText:
        "Agricoma Auto Parts is the indispensable address for high-end automotive parts that meet the highest standards.",
      timeAgo: "10 MONTHS AGO",
      productName: "Village Tomato",
      productImage:
        "https://cdndailyexcelsior.b-cdn.net/wp-content/uploads/2023/07/TOMATO-1-scaled.jpg",
    },
    {
      id: 2,
      name: "JOHN DOE",
      role: "Reviewer",
      rating: 5,
      score: "5/5",
      reviewText:
        "The brake pads I purchased from Auto Parts are incredibly high-quality and durable. They show excellent performance.",
      timeAgo: "10 MONTHS AGO",
      productName: "Organic Cucumber",
      productImage:
        "https://www.greendna.in/cdn/shop/products/cucumber_1_1024x1024@2x.jpg?v=1594219681",
    },
    {
      id: 3,
      name: "JOHN DOE",
      role: "Reviewer",
      rating: 5,
      score: "5/5",
      reviewText:
        "The brands offered by Auto Parts are reliable and well-known. This allows me to make choices with confidence.",
      timeAgo: "10 MONTHS AGO",
      productName: "Green Bell Pepper",
      productImage:
        "https://thumbs.dreamstime.com/z/bell-peppers-collection-different-color-pepper-vector-illustration-51779254.jpg?ct=jpeg",
    },
    {
      id: 4,
      name: "JOHN DOE",
      role: "Reviewer",
      rating: 5,
      score: "5/5",
      reviewText:
        "I am very satisfied with shopping from Auto Parts. I love the high-quality products, reasonable prices, and fast delivery.",
      timeAgo: "10 MONTHS AGO",
      productName: "Green Cabbage",
      productImage:
        "https://5.imimg.com/data5/SELLER/Default/2021/3/WH/FK/EU/72798274/cabbage-1000x1000.jpg",
    },
  ];

  return (
    <div
      style={{
        padding: "20px",
        fontFamily: "Arial, sans-serif",
        margin: "30px",
      }}
    >
      {/* Header */}
      <div
        style={{
          display: "flex",
          alignItems: "center",
          marginBottom: "20px",
        }}
      >
        <h2 style={{ width: "210px" }}>Product Reviews</h2>|
        <p
          style={{
            fontWeight: "600",
            color: "#ccc",
            marginLeft: "5px",
            width: "600px",
          }}
        >
          Our references are very valuable, the result of a great effort...
        </p>
        <button
          style={{
            backgroundColor: "transparent",
            border: "1px solid #ddd",
            padding: "8px 12px",
            borderRadius: "20px",
            display: "flex",
            alignItems: "center",
            cursor: "pointer",
            marginLeft: "450px",
          }}
        >
          All Reviews <FaArrowRight style={{ marginLeft: "5px" }} />
        </button>
      </div>

      {/* Review Cards */}
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(4, 1fr)",
          gap: "20px",
        }}
      >
        {reviews.map((review) => (
          <div
            key={review.id}
            style={{
              backgroundColor: "white",
              border: "1px solid #ddd",
              borderRadius: "8px",
              padding: "15px",
              textAlign: "left",
              boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
            }}
          >
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
              }}
            >
              <div>
                <h4 style={{ margin: "0" }}>{review.name}</h4>
                <span
                  style={{
                    backgroundColor: "#e0f7fa",
                    color: "#00796b",
                    padding: "2px 8px",
                    borderRadius: "12px",
                    fontSize: "10px",
                  }}
                >
                  {review.role}
                </span>
              </div>
              <span
                style={{
                  backgroundColor: "#4caf50",
                  color: "white",
                  padding: "2px 5px",
                  borderRadius: "3px",
                  fontSize: "12px",
                }}
              >
                {review.score}
              </span>
            </div>

            {/* Rating */}
            <div style={{ margin: "10px 0" }}>
              {"★".repeat(review.rating)}
              {"☆".repeat(5 - review.rating)}
            </div>

            {/* Review Text */}
            <p
              style={{
                fontSize: "13px",
                color: "#555",
                overflow: "hidden",
                display: "-webkit-box",
                WebkitLineClamp: "3",
                WebkitBoxOrient: "vertical",
                textOverflow: "ellipsis",
              }}
            >
              {review.reviewText}{" "}
              <span style={{ color: "#00796b", cursor: "pointer" }}>
                Show More
              </span>
            </p>

            {/* Time Ago */}
            <p style={{ color: "#999", fontSize: "12px" }}>{review.timeAgo}</p>

            {/* Product Info */}
            <div
              style={{
                display: "flex",
                alignItems: "center",
                borderTop: "1px solid #ddd",
                paddingTop: "10px",
                marginTop: "10px",
              }}
            >
              <img
                src={review.productImage}
                alt={review.productName}
                style={{
                  width: "40px",
                  height: "40px",
                  marginRight: "10px",
                }}
              />
              <p style={{ fontWeight: "bold", margin: 0 }}>
                {review.productName}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Review;
