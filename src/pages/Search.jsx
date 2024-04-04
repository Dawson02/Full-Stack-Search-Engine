// Search.jsx
import React from "react";
import Footer from "../components/Footer";
import Header from "../components/Header";
import "./Search.css";

const Search = () => {
  return (
    <div className="search-page">
      <Header />
      <div className="search-container">
        <h2>Search for Animals</h2>
        <p>Search for animals by name or criteria:</p>
        <form>
          <input type="text" placeholder="Enter animal name or criteria" />
          <button type="submit">Search</button>
        </form>
      </div>
      <Footer />
    </div>
  );
};

export default Search;
