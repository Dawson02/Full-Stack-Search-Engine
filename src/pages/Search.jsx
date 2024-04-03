import React from "react";
import Footer from "../components/Footer";
import Header from "../components/Header";

const Search = () => {
  return (
    <div>
      <Header></Header>
      <h2>Search for Animals</h2>
      <p>Search for animals by name or criteria:</p>
      <form>
        <input type="text" placeholder="Enter animal name or criteria" />
        <button type="submit">Search</button>
      </form>
      <Footer></Footer>
    </div>
  );
};

export default Search;
