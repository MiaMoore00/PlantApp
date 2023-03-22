import React, { useState } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import "./Register.css";

const Register = () => {
  const [usernameReg, setUsenameReg] = useState("");
  const [emailReg, setEmailReg] = useState("");
  const navigate = useNavigate();

  const registerData = (value) => {
    const body = {
      username: value.username.value,
      email: value.email.value,
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
      .post("api/register", JSON.parse(JSON.stringify(body, replacer)), {
        headers: { "Content-Type": "application/json" },
      })
      .then((response) => {
        console.log(response);
        navigate("/"); // navigate to Home Screen after successful registration
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div className="auth">
      <h1>Sign up</h1>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          registerData(e.target);
        }}
      >
        <input name="username" required type="text" placeholder="Username" />
        <input
          type="text"
          onChange={(e) => {
            setUsenameReg(e.target.value);
          }}
          placeholder="Full name"
        />
        <input
          name="email"
          onChange={(e) => {
            setEmailReg(e.target.value);
          }}
          required
          type="email"
          placeholder="Email"
        />
        <input required type="password" placeholder="Password" />
        <button type="submit">Sign up</button>
        <p>The email or password you enter is not valid!</p>
        <span>
          Already have an account? <Link to="/login">Login!</Link>
        </span>
      </form>
    </div>
  );
};

export default Register;
