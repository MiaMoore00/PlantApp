import React, { useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import "./Register.css";

const Register = () => {
  const [usernameReg, setUsenameReg] = useState("");
  const [emailReg, setEmailReg] = useState("");

  const registerData = (value) => {
    console.log(value.username.value)
    axios.post("/api/register", {
      username: value.username.value,
      email: value.email.value,
    }).then((response) => {
      console.log(response);
    });
  };

  return (
    <div className="auth">
      <h1>Sign up</h1>
      <form onSubmit={(e) => {
        console.log(e)
            e.preventDefault();registerData(e.target);
        }}>
        <input name="username" required type="text" placeholder="Username" />
        <input
          type="text"
          onChange={(e) => {
            setUsenameReg(e.target.value);
          }}
          placeholder="Full name"
        />
        <input name="email"
          onChange={(e) => {
            setEmailReg(e.target.value);
          }}
          required
          type="email"
          placeholder="Email"
        />
        <input required type="password" placeholder="Password" />
        <button type="submit">
        Sign up</button>
        <p>The email or password you enter is not valid!</p>
        <span>
          Already have an account? <Link to="/login">Login!</Link>
        </span>
      </form>
    </div>
  );
};

export default Register;
