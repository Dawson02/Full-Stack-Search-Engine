import React from "react";
import Footer from "../components/Footer";
import Header from "../components/Header";
import "./Login.css";

const Login = () => {
  return (
    <div>
      <Header></Header>
      <div className="login-container">
        <h2>Login</h2>
        <form>
          <label htmlFor="username">Username:</label>
          <input type="text" id="username" name="username" />

          <label htmlFor="email">Email:</label>
          <input type="email" id="email" name="email" />

          <label htmlFor="password">Password:</label>
          <input type="password" id="password" name="password" />

          <button type="submit">Login</button>
        </form>
      </div>
      <Footer></Footer>
    </div>
  );
};

export default Login;
