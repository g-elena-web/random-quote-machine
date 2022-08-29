import React from "react";

import './random-quote.css';

const RandomQuote = (props) => {

    const { quote, author, color } = props;
    const quoteStyle = {
        color
    };

    return (
        <div className="random-quote">
            <div className="quote">
                <i className="fa-solid fa-quote-left" style={quoteStyle}></i>
                <span id="text" style={quoteStyle}> {quote} </span>
                <i className="fa-solid fa-quote-right" style={quoteStyle}></i>
            </div>
            <p className="author" style={quoteStyle}>- {author}</p>
        </div>
    );
}

export default RandomQuote;
