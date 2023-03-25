import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./Forms.css";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    // Perform login authentication check here
    navigate("/");
  };

  return (
    <div id="background">
      <section className="container forms">
        <div className="form login">
          <div className="form-content">
            <header>Login</header>
            <form onSubmit={handleLogin}>
              <div className="field input-field">
                <input
                  required
                  type="text"
                  placeholder="Username"
                  className="input"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                />
              </div>
              <div className="field input-field">
                <input
                  required
                  type="password"
                  placeholder="Password"
                  className="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
              </div>
              <div className="form-link">
                <a href="#" className="forgot-pass">
                  Forgot password?
                </a>
              </div>
              <div className="field button-field">
                <button type="submit">Login</button>
              </div>
              <p>The email or password you entered is not valid!</p>
            </form>

            <div className="form-link">
              <span>
                Don't have an account?{" "}
                <Link to="/register" className="link signup-link">
                  Signup!
                </Link>{" "}
              </span>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Login;
