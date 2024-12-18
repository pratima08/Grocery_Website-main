import React, { useState } from 'react';
import './OrderTracking.css';
import { Link } from 'react-router-dom';

const OrderTracking = () => {
    const [openIndex, setOpenIndex] = useState(null);

    const faqs = [
        { question: "What is your return policy?", answer: "You can return any item within 30 days." },
        { question: "How long does shipping take?", answer: "Shipping takes 5-7 business days." },
        { question: "Do you ship internationally?", answer: "Yes, we do ship internationally." },
    ];

    const toggleFAQ = index => {
        setOpenIndex(openIndex === index ? null : index);
    };

    return (
        <div className="App">
            <header>
                <h1>Order Tracking</h1>
                <nav>
                    <Link href="#" className='linking'>Home</Link>  <Link href="#" className='linkingtext'>Order Tracking</Link>
                </nav>
            </header>
            <div className="main-container">
                <div className="left-container">
                    <h2>Frequently Asked Questions</h2>
                    {faqs.map((faq, index) => (
                        <div key={index}>
                            <div onClick={() => toggleFAQ(index)} className="faq-question">
                                {faq.question}
                            </div>
                            {openIndex === index && <div className="faq-answer">{faq.answer}</div>}
                        </div>
                    ))}
                </div>
                <div className="right-container">
                    <div className='contact'>
                        <h2>Order Tracking</h2>
                        <section className="contact-form">
                            <p>To track your order please enter your Order ID in the box below and press the "Track" button. This was given to you on your receipt and in the confirmation email you should have received.</p>
                            <form>
                                <h6>ORDER ID</h6>
                                <input type="text" name="name" placeholder="Your Name" required />
                                <h6>BILLING EMAIL</h6>
                                <input type="email" name="email" placeholder="Your Email" required />
                                <button type="submit">Submit</button>
                            </form>
                        </section>
                    </div>
                </div>
            </div>
            <div className='contentpara'>
             <h2 className='headtext'>Your shipment is on the way, maybe you might want to buy these too.</h2>
             <p className='paratext'>You can get some products for free by accumulating points with every new order!</p>
             </div>
            <div className="card">
                <div className='card-container'>
                    <img src="https://via.placeholder.com/150" alt="Placeholder" />
                    <p>Some text about the card.</p>
                </div>
                <div className='card-container'>
                    <img src="https://via.placeholder.com/150" alt="Placeholder" />
                    <p>Some text about the card.</p>
                </div>
                <div className='card-container'>
                    <img src="https://via.placeholder.com/150" alt="Placeholder" />
                    <p>Some text about the card.</p>
                </div>
                <div className='card-container'>
                    <img src="https://via.placeholder.com/150" alt="Placeholder" />
                    <p>Some text about the card.</p>
                </div>
                <div className='card-container'>
                    <img src="https://via.placeholder.com/150" alt="Placeholder" />
                    <p>Some text about the card.</p>
                </div>
            </div>
        </div>
    );
};

export default OrderTracking;
