import React, { useState } from "react";
import "./App.css"; // Importing the default CSS file
import "./styles.css"; // Importing the custom styles

function App() {
  const [searchTerm, setSearchTerm] = useState("");

  const handleChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // Handle search logic here (for example, fetching data based on the search term)
    console.log("Searching for:", searchTerm);
  };

  return (
    <div>
      <header className="header">
        <h1>Types of Animals</h1>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Search..."
            value={searchTerm}
            onChange={handleChange}
            className="search-bar"
          />
          <button type="submit" className="search-button">
            Search
          </button>
        </form>
      </header>
      <div className="container">{/* Add your content here */}</div>
    </div>
  );
}

export default App;
