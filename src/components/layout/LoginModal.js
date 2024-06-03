import React, { useState } from "react";
import "../../styles/layout/LoginModal.css";

const LoginModal = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();

    // Replace with your actual login logic
    // This example just checks if email and password are filled

    if (!email || !password) {
      setErrorMessage("Please fill in all fields");
      return;
    }

    console.log("Login attempted with email:", email, "password:", password);
    // Handle successful login (close modal, redirect, etc.)
  };

  return (
    <div className="login-modal">
      <h2>Login</h2>
      {errorMessage && <p className="error-message">{errorMessage}</p>}
      <form onSubmit={handleSubmit}>
        <label htmlFor="email">Email Address</label>
        <input
          type="email"
          id="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <label htmlFor="password">Password</label>
        <input
          type="password"
          id="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <button type="submit">Sign In</button>
      </form>
      <a href="/">Forgot Password?</a>
    </div>
  );
};

export default LoginModal;
