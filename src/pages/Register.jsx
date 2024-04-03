import React from "react";
import Footer from "../components/Footer";
import Header from "../components/Header";

const Register = () => {
  return (
    <div>
      <Header></Header>
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
      <Footer></Footer>
    </div>
  );
};

export default Register;
