import React, { useState } from "react";
import axios from "axios";
import Footer from "../components/Footer";
import Header from "../components/Header";
import "./Search.css";

const Search = () => {
  const [animals, setAnimals] = useState([]);

  const handleViewAllClick = async (event) => {
    event.preventDefault();
  
    try {
      const response = await axios.get("https://cors-anywhere.herokuapp.com/http://localhost:8080/animals");
      setAnimals(response.data);
    } catch (error) {
      if (error.response) {
        // The request was made, but the server responded with a status code
        console.error("Error fetching animals. Server responded with status:", error.response.status);
        console.error("Response data:", error.response.data);
      } else if (error.request) {
        // The request was made but no response was received
        console.error("Error fetching animals. No response received.");
      } else {
        // Something else happened while setting up the request
        console.error("Error fetching animals:", error.message);
      }
    }
  };
  

  return (
    <div className="search-page">
      <Header />
      <div className="search-container">
        <h2>Search for Animals</h2>
        <p>Search for animals by name or criteria:</p>
        <form>
          <input type="text" placeholder="Enter animal name or criteria" />
          <div className="searchbtn">
            <button type="submit">Search</button>
            <button onClick={handleViewAllClick}>View All</button>
          </div>
        </form>
      </div>
      <div className="animal-container">
        {animals.map((animal, index) => (
          <div key={index} className="animal-item">
            <p>Name: {animal.name}</p>
            <p>Species: {animal.species}</p>
            <p>Age: {animal.age}</p>
            <p>Color: {animal.color}</p>
            <p>Weight: {animal.weight}</p>
            <p>Habitat: {animal.habitat}</p>
            <p>Diet: {animal.diet}</p>
            <p>Average Lifespan: {animal.average_lifespan}</p>
            <p>Predators: {animal.predators}</p>
          </div>
        ))}
      </div>
      <Footer />
    </div>
  );
};

export default Search;