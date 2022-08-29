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
        const { color, hoverColor, getNewQuote } = this.props;
        const { hover } = this.state;
        const btnStyle = {
            backgroundColor: hover ? hoverColor : color
        };

        return (
            <button className="new-quote-btn" onClick={getNewQuote} style={btnStyle}
                onMouseEnter={this.toggleHover} onMouseLeave={this.toggleHover} >
                New quote
            </button>
        );
    }
}
