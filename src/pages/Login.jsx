import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./Forms.css";
import videoBg from "../assets/video2.mp4"


const Login = ({setUserId}) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch("/api/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ 
          username: username,
          password: password
        }),
      });
      const data = await response.json();
      if (response.ok) {
        console.log(data);
        setUserId(data.userId)
        navigate("/Home");
      } else {
        // Display error message to user
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="main ">
        <video src ={videoBg} autoPlay loop muted className='fixed w-screen left-1/2 top-1/2 h-screen object-cover -translate-y-1/2 -translate-x-1/2 -z-10'/>
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
              {/* <p>The Username or password you entered is not valid!</p> */}
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
  </div>
  );
};

export default Login;
