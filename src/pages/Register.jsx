// Register.jsx
import React from "react";
import Footer from "../components/Footer";
import Header from "../components/Header";
import "./Register.css";

const Register = () => {
  return (
    <div className="register-page">
      <Header></Header>
      <div className="register-container">
        <h2>Register</h2>
        <form>
          <label htmlFor="username">Username:</label>
          <input type="text" id="username" name="username" />

          <label htmlFor="email">Email:</label>
          <input type="email" id="email" name="email" />

          <label htmlFor="password">Password:</label>
          <input type="password" id="password" name="password" />

          <label htmlFor="confirmPassword">Confirm Password:</label>
          <input type="password" id="confirmPassword" name="confirmPassword" />

          <button type="submit">Register</button>
        </form>
      </div>
      <Footer></Footer>
    </div>
  );
};

export default Register;
