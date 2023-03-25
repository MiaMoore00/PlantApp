import React, { useState } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import "./Forms.css";

const Register = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const navigate = useNavigate();

  const registerData = (e) => {
    e.preventDefault();
    const body = {
      userName: username,
      email: email,
    };
    const replacer = (key, value) => {
      if (typeof value === "object" && value !== null) {
        const seen = new WeakSet();
        if (seen.has(value)) {
          return;
        }
        seen.add(value);
      }
      return value;
    };
    axios
      .post(
        "http://localhost:3001/api/register",
        JSON.parse(JSON.stringify(body, replacer)),
        {
          headers: { "Content-Type": "application/json" },
        }
      )
      .then((response) => {
        console.log(response);
        navigate("/"); // navigate to Home Screen after successful registration
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div id="background">
      <section className="container forms flex">
        <div className="form signup">
          <div className="form-content">
            <header>Signup</header>
            <form onSubmit={registerData}>
              <div className="field input-field">
                <input
                  required
                  type="text"
                  onChange={(e) => {
                    setUsername(e.target.value);
                  }}
                  placeholder="Username"
                  className="input"
                />
              </div>
              <div className="field input-field">
                <input type="text" placeholder="Full Name" className="input" />
              </div>
              <div className="field input-field">
                <input
                  required
                  type="email"
                  onChange={(e) => {
                    setEmail(e.target.value);
                  }}
                  placeholder="Email"
                  className="input"
                />
              </div>

              <div className="field input-field">
                <input
                  required
                  type="password"
                  placeholder="Create password"
                  className="password"
                />
              </div>
              <div className="field button-field">
                <button>Signup</button>
              </div>
            </form>
            <div className="form-link">
              <span>
                Already have an account?{" "}
                <Link to="/login" className="link login-link">
                  Login
                </Link>
              </span>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Register;
