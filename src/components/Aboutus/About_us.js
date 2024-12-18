import React from "react";
import "./AboutUs.css";
import { FaArrowRight } from 'react-icons/fa';

const reviews = [
    {
        id: 1,
        name: 'ADMIN',
        role: 'Reviewer',
        rating: 5,
        score: '5/5',
        reviewText: 'Agricoma Auto Parts is the indispensable address for high-end automotive parts that meet the highest standards.',
        timeAgo: '10 MONTHS AGO',
        productName: 'Village Tomato',
        productImage: 'https://via.placeholder.com/50x50',
    },
    {
        id: 2,
        name: 'JOHN DOE',
        role: 'Reviewer',
        rating: 5,
        score: '5/5',
        reviewText: 'The brake pads I purchased from Auto Parts are incredibly high-quality and durable. They show excellent performance.',
        timeAgo: '10 MONTHS AGO',
        productName: 'Organic Cucumber',
        productImage: 'https://via.placeholder.com/50x50',
    },
    {
        id: 3,
        name: 'JOHN DOE',
        role: 'Reviewer',
        rating: 5,
        score: '5/5',
        reviewText: 'The brands offered by Auto Parts are reliable and well-known. This allows me to make choices with confidence.',
        timeAgo: '10 MONTHS AGO',
        productName: 'Green Bell Pepper',
        productImage: 'https://via.placeholder.com/50x50',
    },
    {
        id: 4,
        name: 'JOHN DOE',
        role: 'Reviewer',
        rating: 5,
        score: '5/5',
        reviewText: 'I am very satisfied with shopping from Auto Parts. I love the high-quality products, reasonable prices, and fast delivery.',
        timeAgo: '10 MONTHS AGO',
        productName: 'Green Cabbage',
        productImage: 'https://via.placeholder.com/50x50',
    },
];


const AboutUs = () => {
  return (
    <div className="about-us">
      {/* Video Section */}
      <div className="video-section">
        <video autoPlay loop muted className="background-video">
          <source src="https://www.w3schools.com/html/mov_bbb.mp4" type="video/mp4" />
        </video>
        <div className="video-text-box">
            <h6>ninetheme company</h6>
            <h1>We believe we can all make a difference.</h1>
          <p>Together, we can create positive change by making mindful choices and taking actions that benefit our communities and the world around us. Every effort counts, and your contribution matters.</p>
        </div>
      </div>

      {/* Image and Content Section */}
      <div className="content-section">
        <div className="content-image">
          <img src="https://c1.wallpaperflare.com/preview/127/182/407/grocery-store-supermarket-vegetable-shop.jpg" alt="About Us" />
        </div>
        <div className="content-text">
            <span className="labeltext">Team of 30 people</span>
          <h2>Experienced and Hardworking Team</h2>
          <p>
          Inspired by the rebellious spirit of America and the intrigue of unwavering authenticity, R13 launched in Fall 2009. At the forefront of design, R13 cuts avant-garde silhouettes such as the skinny legging and harem pant from Italian and Turkish denim produced in Castelfranco, Italy. Pure indigo casting, quality stretch and machine hand mending give the jeans their superior...
          </p>
          <h5>#denim #jeans #coats #smart #agricoma</h5>
        </div>
      </div>

      {/* Statistics Section */}
      <div className="statistics-section">
        <div className="stat">
          <h2>100+</h2>
          <p>Experts</p>
        </div>
        <div className="stat">
          <h2>1000+</h2>
          <p>Products</p>
        </div>
        <div className="stat">
          <h2>14000+</h2>
          <p>Customers</p>
        </div>
        <div className="stat">
          <h2>8</h2>
          <p>Stores</p>
        </div>
      </div>

      {/* Text Section */}
      <div className="text-section">
        <div className="paratext">
        <p>
            <h4>Grocery Store</h4>
          Our goal is to deliver premium quality products that meet the needs and preferences of our customers.
        </p>
        </div>
      </div>

      {/* Reviews and CTA Section */}
      <div style={{
        marginLeft:'100px',
        marginRight:'100px',
        backgroundColor:"orange",
        padding:'20px'
       }}>
      <div style={{
                display: 'flex',
                alignItems: 'center',
                marginBottom: '20px',
            }}>
                <h2 style={{width:'300px'}}>Customer Reviews</h2>
                <p style={{fontWeight:"300",color:'#ccc',marginLeft:'1px',width:'600px',fontSize:'0.8rem',marginTop:'24px'}}>Our references: A few of the thousands of happy customer reviews...</p>
                <button style={{
                    backgroundColor: 'transparent',
                    border: '1px solid #ddd',
                    padding: '8px 12px',
                    borderRadius: '20px',
                    display: 'flex',
                    alignItems: 'center',
                    cursor: 'pointer',
                    marginLeft:'100px',
                }}>
                    Buy Products <FaArrowRight style={{ marginLeft: '5px' }} />
                </button>
            </div>

            {/* Review Cards */}
            <div style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(4, 1fr)',
                gap: '20px',
            }}>
                {reviews.map(review => (
                    <div key={review.id} style={{
                        backgroundColor: 'white',
                        border: '1px solid #ddd',
                        borderRadius: '8px',
                        padding: '15px',
                        textAlign: 'left',
                        boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)'
                    }}>
                        <div style={{
                            display: 'flex',
                            justifyContent: 'space-between',
                            alignItems: 'center'
                        }}>
                            <div>
                                <h4 style={{ margin: '0' }}>{review.name}</h4>
                                <span style={{
                                    backgroundColor: '#e0f7fa',
                                    color: '#00796b',
                                    padding: '2px 8px',
                                    borderRadius: '12px',
                                    fontSize: '10px'
                                }}>{review.role}</span>
                            </div>
                            <span style={{
                                backgroundColor: '#4caf50',
                                color: 'white',
                                padding: '2px 5px',
                                borderRadius: '3px',
                                fontSize: '12px'
                            }}>{review.score}</span>
                        </div>

                        {/* Rating */}
                        <div style={{ margin: '10px 0' }}>
                            {'★'.repeat(review.rating)}{'☆'.repeat(5 - review.rating)}
                        </div>

                        {/* Review Text */}
                        <p style={{
                            fontSize: '13px',
                            color: '#555',
                            overflow: 'hidden',
                            display: '-webkit-box',
                            WebkitLineClamp: '3',
                            WebkitBoxOrient: 'vertical',
                            textOverflow: 'ellipsis'
                        }}>
                            {review.reviewText} <span style={{ color: '#00796b', cursor: 'pointer' }}>Show More</span>
                        </p>

                        {/* Time Ago */}
                        <p style={{ color: '#999', fontSize: '12px' }}>{review.timeAgo}</p>

                        {/* Product Info */}
                        <div style={{
                            display: 'flex',
                            alignItems: 'center',
                            borderTop: '1px solid #ddd',
                            paddingTop: '10px',
                            marginTop: '10px'
                        }}>
                            <img src={review.productImage} alt={review.productName} style={{
                                width: '40px',
                                height: '40px',
                                marginRight: '10px'
                            }} />
                            <p style={{ fontWeight: 'bold', margin: 0 }}>{review.productName}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
      {/* Instagram Section */}
      <div className="instagram-section">
        <div className="instagram-header">
          <h3>Follow Us on Instagram</h3>
          <button className="follow-btn">Follow ➔</button>
        </div>
        <div className="image-carousel">
          <div className="carousel-track">
            <img src="https://m.media-amazon.com/images/I/81V9nb0E6LL._SL1500_.jpg" alt="Instagram 1" />
            <img src="https://sagaciresearch.com/wp-content/uploads/2019/09/Top-10-Carbonated-Soft-Drinks-Egypt-V3.jpg" alt="Instagram 3" />
            <img src="https://kruidenhemel.be/wp-content/uploads/2022/04/kurkure-masala-munch-90g.png" alt="Instagram 2" />
            <img src="https://i.pinimg.com/originals/99/38/00/993800befebf4450b7af792705968fe2.jpg" alt="Instagram 3" />
            <img src=" https://5.imimg.com/data5/SELLER/Default/2021/10/KN/TW/XN/132199114/garam-khada-masala-1000x1000.png" alt="Instagram 3" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
