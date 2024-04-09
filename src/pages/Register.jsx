import React, { useState } from "react";
import axios from "axios";
import Footer from "../components/Footer";
import Header from "../components/Header";
import "./Register.css";

const Register = () => {
  // State variables for form inputs
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  // Function to handle form submission
// Function to handle form submission
const handleSubmit = async (event) => {
  event.preventDefault(); // Prevent default form submission

  try {
    // Make a POST request to your backend /register endpoint
    const response = await axios.post("http://localhost:8080/users/register", {
      username,
      email,
      password,
    });

    // Handle successful registration response
    console.log("User registered successfully:", response.data);
    // Optionally, you can redirect to another page or show a success message
  } catch (error) {
    // Check if error.response exists before accessing its properties
    if (error.response) {
      // Handle registration error with a specific message or action
      console.error("Error registering user:", error.response.data);
      // Optionally, display an error message to the user
    } else {
      // Handle other types of errors (e.g., network issues)
      console.error("Error registering user:", error.message);
    }
  }
};

  return (
    <div className="register-page">
      <Header></Header>
      <div className="register-container">
        <h2>Register</h2>
        <form onSubmit={handleSubmit}>
          <label htmlFor="username">Username:</label>
          <input
            type="text"
            id="username"
            name="username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />

          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            name="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />

          <label htmlFor="password">Password:</label>
          <input
            type="password"
            id="password"
            name="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />

          <button type="submit">Register</button>
        </form>
      </div>
      <Footer></Footer>
    </div>
  );
};

export default Register;