import React, { useState } from "react";
import axios from "axios";
import Footer from "../components/Footer";
import Header from "../components/Header";
import "./Login.css";

const Login = () => {
  // State variables for form inputs
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(""); // State for handling login errors

  // Function to handle form submission
  const handleSubmit = async (event) => {
    event.preventDefault(); // Prevent default form submission

    try {
      // Make a POST request to your backend /login endpoint
      const response = await axios.post("http://localhost:8080/users/login", {
        username,
        password,
      });

      // Handle successful login response
      console.log("Login successful:", response.data);
      // Optionally, you can redirect to another page or perform other actions upon successful login
    } catch (error) {
      // Handle login error
      setError("Invalid username or password"); // Set error message state
      console.error("Error logging in:", error);
      // Optionally, display an error message to the user
    }
  };

  return (
    <div>
      <Header></Header>
      <div className="login-container">
        <h2>Login</h2>
        {error && <p className="error-message">{error}</p>}
        <form onSubmit={handleSubmit}>
          <label htmlFor="username">Username:</label>
          <input
            type="text"
            id="username"
            name="username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />

          <label htmlFor="password">Password:</label>
          <input
            type="password"
            id="password"
            name="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />

          <button type="submit">Login</button>
        </form>
      </div>
      <Footer></Footer>
    </div>
  );
};

export default Login;