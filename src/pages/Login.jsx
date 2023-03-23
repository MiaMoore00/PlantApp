import React from "react";
import { Link, useNavigate } from "react-router-dom";
import "./Login.css";

const Login = () => {
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    // Perform login authentication check here
    navigate("/");
  };

  return (
    <div className="auth">
      <h1>Login</h1>
      <form onSubmit={handleLogin}>
        <input required type="text" placeholder="Username" />
        <input required type="email" placeholder="Email" />
        <button type="submit">Login</button>
        <p>The email or password you enter is not valid!</p>
        <span>
          Don't have an account? <Link to="/register">Sign up!</Link>
        </span>
      </form>
    </div>
  );
};

export default Login;