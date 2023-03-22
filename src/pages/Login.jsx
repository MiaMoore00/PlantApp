import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./Login.css";

const Login = () => {
  const navigate = useNavigate();
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  // const handleLogin = (e) => {
  //   e.preventDefault();
  //   if (
  //     username === "example" &&
  //     email === "example@example.com" &&
  //     password === "example"
  //   ) {
  //     navigate("/");
  //   } else {
  //     setError("The email or password you entered is not valid.");
  //   }
  // };

  const handleLogin = (e) => {
    e.preventDefault();
    console.log("Login button clicked");
    console.log("Username:", username);
    console.log("Email:", email);
    console.log("Password:", password);
    if (
      username === "TestUser01" &&
      email === "TestUser01@gmail.com" &&
      password === "password"
    ) {
      console.log("Login successful");
      navigate("/");
    } else {
      console.log("Login failed");
      setError("The email or password you entered is not valid.");
    }
  };

  return (
    <div className="auth">
      <h1>Login</h1>

      <form onSubmit={handleLogin}>
        <input
          required
          type="text"
          placeholder="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />

        <input
          required
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        <input
          required
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button type="submit">Login</button>
        <p>{error}</p>

        <span>
          Don't have an account? <Link to="/register">Sign up!</Link>
        </span>
      </form>
    </div>
  );
};

export default Login;
