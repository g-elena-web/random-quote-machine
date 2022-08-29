import React, { Component } from "react";

import './share-btns.css';

class ShareBtns extends Component {

    createTwitterLink = (quote, author) => {
        return `https://twitter.com/intent/tweet?text=${encodeURI(`"${quote}" - ${author}`)}`;
    }

    createTumblrLink = (quote, author) => {
        return `https://tumblr.com/widgets/share/tool?posttype=quote&content=${encodeURI(quote)}&caption=${encodeURI(author)}&canonicalUrl=https://codepen.io/cardigan/full/poLRevx")`;
    }

    render() {
        const { quote, author, color } = this.props;
        const shareStyle = {
            color
        };

        return (
            <div className="share-btns">
                <a className="share tweet-quote" href={this.createTwitterLink(quote, author)} 
                    target="_blank" style={shareStyle}>
                    <i className="fa-brands fa-twitter"></i></a>
                <a className="share tumblr-quote" href={this.createTumblrLink(quote, author)} 
                    target="_blank" style={shareStyle}>
                    <i className="fa-brands fa-tumblr"></i></a>
            </div>
        );
    }
}

export default ShareBtns;