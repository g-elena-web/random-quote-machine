import React, { Component } from "react";
import QapiService from "../../services/qapi-service";
import NewQuoteBtn from "../new-quote-btn";
import RandomQuote from "../random-quote/random-quote";
import ShareBtns from "../share-btns";

import './app.css';

export default class App extends Component {

    qapiService = new QapiService();

    count = 0;

    state = {
        quote: null,
        author: null,
        error: false,
        colorIndex: 5
    }

    colors = ['black', '#4158D0', '#8B53C7', '#C850C0', '#E89891',  '#FFCC70'];

    onQuoteLoaded = ({ quote, author }) => {
        this.setState({
            quote,
            author,
            error: false
        });
        this.changeColor();
    }

    onError = () => {
        this.setState({
            quote: null,
            author: null,
            error: true
        });
    }

    getQuote = () => {
        this.qapiService.getRandomQuote()
            .then(this.onQuoteLoaded)
            .catch(this.onError);
    }

    changeColor = () => {
        this.setState(({ colorIndex }) => ({
            colorIndex: (colorIndex + 1) % 6
        }));
    }

    componentDidMount() {
        this.getQuote();
    }

    render() {
        const { quote, author, colorIndex, error } = this.state;
        const newColor = this.colors[colorIndex];
        
        return (
            <div className="app">
                <div className="quote-box">
                    {error ? <span>Something went wrong</span> :
                        <RandomQuote getQuote={this.setQuoteData} 
                        quote={quote} author={author} color={newColor} />
                    }
                    <div className="quote-footer">
                        {!error && <ShareBtns quote={quote} author={author} color={newColor} />}
                        <NewQuoteBtn getNewQuote={this.getQuote} color={newColor} />
                    </div>
                </div>
            </div>
        )
    }
}