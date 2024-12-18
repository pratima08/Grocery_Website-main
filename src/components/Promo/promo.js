import React from 'react';
import './promo.css'; // Import CSS for styling

const Promopage = ({ leftTitle, listItems, rightTitle, buttonText, onButtonClick }) => {
    return (
        <div className="container">
            <div className="left-div">
                <h2>{leftTitle}</h2>
                <ul className="list">
                    {listItems.map((item, index) => (
                        <li key={index}>{item}</li>
                    ))}
                </ul>
            </div>
            <div className="right-div">
                <h2>{rightTitle}</h2>
                <button onClick={onButtonClick}>{buttonText}</button>
            </div>
        </div>
    );
};

export default Promopage;
