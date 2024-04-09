import React, { useState } from "react";
import axios from "axios";
import Footer from "../components/Footer";
import Header from "../components/Header";
import "./Search.css";

const Search = () => {
  const [animals, setAnimals] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  const handleViewAllClick = async (event) => {
    event.preventDefault();

    try {
      const response = await axios.get("http://localhost:8080/animals");
      
      setAnimals(response.data);
    } catch (error) {
      console.error("Error fetching animals:", error);
    }
  };

  const handleSearch = async (event) => {
    event.preventDefault();

    try {
      const response = await axios.get("http://localhost:8080/animals/search", {
        params: { search: searchTerm },
      });
      
      setAnimals(response.data);
    } catch (error) {
      console.error("Error searching animals:", error);
    }
  };

  const clearAnimals = (event) => {
    event.preventDefault(); // Prevent form submission (just in case)
    event.stopPropagation(); // Prevent event propagation
  
    setAnimals([]);
  };

  return (
    <div className="search-page">
      <Header />
      <div className="search-container">
        <h2>Search for Animals</h2>
        <p>Search for animals by name or criteria:</p>
        <form onSubmit={handleSearch}>
          <input
            type="text"
            placeholder="Enter animal name or criteria"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          <div className="searchbtn">
            <button type="submit">Search</button>
            <button onClick={handleViewAllClick}>View All</button>
            <button onClick={clearAnimals}>Clear</button>
          </div>
        </form>
      </div>
      <div className="animal-container">
        {animals.map((animal, index) => (
          <div key={index} className="animal-item">
            <p><strong>Species: </strong>{animal.species}</p>
            <p><strong>Age: </strong>{animal.age}</p>
            <p><strong>Color: </strong>{animal.color}</p>
            <p><strong>Weight: </strong>{animal.weight}</p>
            <p><strong>Habitat: </strong>{animal.habitat}</p>
            <p><strong>Diet: </strong>{animal.diet}</p>
            <p><strong>Average Lifespan: </strong>{animal.averageLifespan}</p>
            <p><strong>Predators: </strong>{animal.predators}</p>
          </div>
        ))}
      </div>
      <Footer />
    </div>
  );
};

export default Search;