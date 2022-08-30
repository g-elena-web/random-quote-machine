import { render } from "@testing-library/react";
import React, { Component } from "react";

import './new-quote-btn.css';

export default class NewQuoteBtn extends Component {
    state = {
        hover: false
    }

    toggleHover = () => {
        this.setState(({ hover }) => ({
            hover: !hover
        }))
    }

    render() {
        const { color, getNewQuote } = this.props;
        const btnStyle = {
            backgroundColor: color
        };

        return (
            <button className="new-quote-btn" onClick={getNewQuote} style={btnStyle}
                onMouseEnter={this.toggleHover} onMouseLeave={this.toggleHover} >
                New quote
            </button>
        );
    }
}
