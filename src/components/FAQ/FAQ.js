import React, { useState } from 'react';


const FAQ = () => {

  const faqs = [
    { id: 1, question: "Accordion #1", answer: "Lorem ipsum dolor sit amet, consectetur adipiscing elit." },
    { id: 2, question: "Accordion #2", answer: "Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo." },
    { id: 2, question: "Accordion #2", answer: "Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo." },
  ];

  const customerReviews = [
    { id: 1, user: "ADMIN", review: "A Auto Parts is the indispensable for high-end automotive parts...", rating: 4.5, product: "Village Tomato", date: "5 AGO" },
    { id: 2, user: "JOHN DOE", review: "The brake pads I purchased from Auto Parts are incredibly high-quality and durable...", rating: 4.5, product: "Organic Cucumber", date: "10 MON AGO" },
  ];

  const products = [
    { id: 1, name: "Organic Potato", price: "$9.99 - $41.99", discount: "SALE", stock: "In Stock", image: "https://via.placeholder.com/100" },
    { id: 2, name: "Village Tomato", price: "$21.99", discount: "33%", stock: "In Stock", image: "https://via.placeholder.com/100" },
    { id: 3, name: "Organic Cucumber", price: "$21.99", discount: "15%", stock: "In Stock", image: "https://via.placeholder.com/100" },
    { id: 4, name: "Red Apple", price: "$151.99", discount: "7%", stock: "In Stock", image: "https://via.placeholder.com/100" },
    { id: 5, name: "Green Bell Pepper", price: "$120.99", discount: "SALE", stock: "In Stock", image: "https://via.placeholder.com/100" },
  ];

  return (
    <div style={styles.container}>

    <div style={styles.faqpage}>
      <header style={styles.faqheader}>
        <h1>What you are wondering...</h1>
        <p>Cardigan Helvetica scenester, Portland celiac</p>
      </header>
   </div>
     
      {/* FAQ Section */}
      <div style={styles.section}>
        <div style={styles.leftcontainer}> 
        <div style={styles.section2}>
        <h3 style={styles.sectionTitle}>Frequently Asked Questions (FAQ)</h3>
        <p style={styles.paratext}>Venenatis duis tristique accumsan netus enim in posuere torquent ut ullamcorper integer aliquam a mi curae elementum. Maecenas iaculis viverra tellus ridiculus a sed vestibulum dapibus. Ante a mollis habitant duis urna cum iaculis ullamcorper luctus. Venenatis duis tristique accumsan netus enim in posuere torquent ut ullamcorper integer aliquam a mi curae elementum.</p>
      </div>
     <div style={styles.section2}>
      <h3 style={styles.sectionTitle}>PAYMENT INFORMATION</h3>
      <p  style={styles.paratext}>Venenatis duis tristique accumsan netus enim in posuere torquent ut ullamcorper integer aliquam a mi curae elementum. Maecenas iaculis viverra tellus ridiculus a sed vestibulum dapibus. Lorem ipsum dolor sit amet</p>
     </div>
      {/* Customer Reviews */}
      <div style={styles.section2}>
        <div style={styles.inflex}>
        <h2 style={styles.sectionTitle}>Customer Reviews</h2>
        <p style={styles.readmorebutton}>Read More</p>
        </div>
        <div style={styles.reviewsContainer}>
          {customerReviews.map((review) => (
            <CustomerReview key={review.id} review={review} />
          ))}
        </div>
        </div>
        </div>
        <div style={styles.rightcontainer}> 
          <div style={styles.refund}>
          <h2 style={styles.headertext}>Refund</h2>
        {faqs.map((item) => (
          <Accordion key={item.id} title={item.question} content={item.answer} />
        ))}
        </div>
        <div style={styles.refund}>
          <h2 style={styles.headertext}>Delivery</h2>
        {faqs.map((item) => (
          <Accordion key={item.id} title={item.question} content={item.answer} />
        ))}
        </div>
        <div style={styles.refund}>
          <h2 style={styles.headertext}>Shipping and Returns</h2>
        {faqs.map((item) => (
          <Accordion key={item.id} title={item.question} content={item.answer} />
        ))}
        </div>
        </div>
      </div>

      {/* Bestseller Products */}
      <div style={styles.section2}>
        <h2 style={styles.sectionTitle}>Bestseller Brands</h2>
        <div style={styles.productContainer}>
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </div>
  );
};

const Accordion = ({ title, content }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div style={styles.accordion}>
      <h3 onClick={() => setIsOpen(!isOpen)} style={styles.accordionTitle}>
        {title} <span>{isOpen ? "-" : "+"}</span>
      </h3>
      {isOpen && <div style={styles.accordionContent}>{content}</div>}
    </div>
  );
};

const ProductCard = ({ product }) => {
  return (
    <div style={styles.productCard}>
      <div style={styles.discount}>{product.discount}</div>
      <img src={product.image} alt={product.name} style={styles.productImage} />
      <h4 style={styles.productName}>{product.name}</h4>
      <p style={styles.productPrice}>{product.price}</p>
      <p style={styles.productStock}>{product.stock}</p>
    </div>
  );
};

const CustomerReview = ({ review }) => {
  return (
    <div style={styles.reviewCard}>
      <h4 style={styles.reviewUser}>{review.user}</h4>
      <p style={styles.reviewText}>{review.review}</p>
      <p style={styles.reviewProduct}>{review.product}</p>
      <p style={styles.reviewDate}>{review.date}</p>
    </div>
  );
};

// Inline styles for layout, colors, and positioning
const styles = {
  container: {
    padding: "20px",
    fontFamily: "Arial, sans-serif",
  },
  faqpage: {
    fontfamily: "Arial, sans-serif",
    padding: "20px"
  },
  
  faqheader: {
    backgroundcolor: "#f0f0f0",
    textalign: "center",
    padding: "20px",
    justifyContent:"center",
  },
  
  notification: {
    display: "flex",
    alignItems: "center",
    backgroundColor: "#f3f4f6",
    padding: "15px",
    borderRadius: "8px",
    marginBottom: "20px",
    color: "#2563eb",
    fontWeight: "bold",
  },
  section: {
    display:"flex",
    marginBottom: "30px",
    gap:"100px",
    margin:"20px",
  },
  section2:{
    marginBottom: "30px",
    marginTop:"30px",
  },
  leftcontainer:{
    width:"600px",
    textAlign:"justify",
  },
  rightcontainer:{
     width:"700px",
  },
  sectionTitle: {
    fontSize: "20px",
    marginBottom: "10px",
  },
  paratext:{
    fontSize:"14px",
  },
  headertext:{
  marginBottom:"20px",
  },
  refund:{
   padding:"20px",
  },
  inflex:{
   display:"flex",
   justifyContent:"space-between",
   alignItems:"center",
  },
  readmorebutton:{
    width:"100px",
    textAlign:"center",
    padding:"5px",
    fontSize:"0.8rem",
  },
  accordion: {
    marginBottom: "10px",
    cursor: "pointer",
    fontSize:"0.8rem",
    color:"green",
  },
  accordionTitle: {
    display: "flex",
    justifyContent: "space-between",
  },
  accordionContent: {
    padding: "10px",
    fontSize: "10px",
    color: "#4b5563",
  },
  reviewsContainer: {
    width:'700px',
    display: "flex",
    gap: "10px",
    flexWrap: "wrap",
  },
  reviewCard: {
    backgroundColor: "#fff",
    border: "1px solid #ddd",
    padding: "20px",
    borderRadius: "8px",
    width: "200px",
  },
  reviewUser: {
    fontWeight: "bold",
  },
  reviewText: {
    fontSize: "14px",
    color: "#555",
  },
  reviewProduct: {
    color: "#10b981",
    fontWeight: "bold",
  },
  reviewDate: {
    fontSize: "12px",
    color: "#999",
  },
  productContainer: {
    display: "flex",
    gap: "15px",
    flexWrap: "wrap",
  },
  productCard: {
    backgroundColor: "#fff",
    border: "1px solid #ddd",
    borderRadius: "8px",
    padding: "15px",
    width: "180px",
    textAlign: "center",
    position: "relative",
  },
  discount: {
    position: "absolute",
    top: "10px",
    right: "10px",
    backgroundColor: "#10b981",
    color: "#fff",
    padding: "5px",
    fontSize: "12px",
  },
  productImage: {
    width: "100px",
    height: "100px",
    objectFit: "cover",
  },
  productName: {
    fontWeight: "bold",
    fontSize: "16px",
    color: "#333",
  },
  productPrice: {
    color: "#2563eb",
    fontWeight: "bold",
  },
  productStock: {
    fontSize: "12px",
    color: "#10b981",
  },
};

export default FAQ;
