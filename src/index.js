import React, { useEffect, useState } from "react";
import ReactDOM from "react-dom";
import "./index.css";

const API =
  "https://gist.githubusercontent.com/camperbot/5a022b72e96c4c9585c32bf6a75f62d9/raw/e3c6895ce42069f0ee7e991229064f167fe8ccdc/quotes.json";
const App = () => {
  const [quote, setQuote] = useState("");
  const [author, setAuthor] = useState("");

  const getQuoteFromAPI = async () => {
    const response = await fetch(API);
    const data = await response.json();
    const quotes = data.quotes;
    const randomNum = Math.floor(Math.random() * quotes.length);
    setQuote(quotes[randomNum].quote);
    setAuthor(quotes[randomNum].author);
  };
  useEffect(() => {
    getQuoteFromAPI();
  }, []);

  return (
    <div id="quote-box">
      <div className="quote-text">
        <p id="text">{quote}</p>
      </div>
      <div className="quote-author">
        <p id="author">{author}</p>
      </div>
      <div className="buttons">
        <button id="new-quote" onClick={getQuoteFromAPI}>
          New quote
        </button>
        <a
          id="tweet-quote"
          href={`https://twitter.com/intent/tweet?text=${quote}${author}`}
          target="_blank"
        >
          Tweet quote
        </a>
      </div>
    </div>
  );
};

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
