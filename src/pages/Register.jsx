import React, { useState } from "react";
// import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import "./Forms.css";
import videoBg from "../assets/video2.mp4"

const Register = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");

  const navigate = useNavigate();

  const registerData = async event => {
    event.preventDefault();
    await fetch("/api/register", {
      method: 'POST',
      headers: {
          'Content-Type': 'application/json', 
    },
    
    body: JSON.stringify({
      username: username,
      password: password,
      email: email,
    })

  })
  .then((response) => response.json())
  .then((data) => {
      console.log(data);
      if(data) {
          navigate("/");
      } else {
        console.log(data)
      }
  })


    // const replacer = (key, value) => {
    //   if (typeof value === "object" && value !== null) {
    //     const seen = new WeakSet();
    //     if (seen.has(value)) {
    //       return;
    //     }
    //     seen.add(value);
    //   }
    //   return value;
    // };
    // axios
    //   .post(
    //     "http://localhost:3001/api/register",
    //     JSON.parse(JSON.stringify(body, replacer)),
    //     {
    //       headers: { "Content-Type": "application/json" },
    //     }
    //   )
    //   .then((response) => {
    //     console.log(response);
    //     navigate("/"); // navigate to Home Screen after successful registration
    //   })
    //   .catch((error) => {
    //     console.log(error);
    //   });
  };

  return (
    <div className="main ">
        <video src ={videoBg} autoPlay loop muted className='fixed w-screen left-1/2 top-1/2 h-screen object-cover -translate-y-1/2 -translate-x-1/2 -z-10'/>
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
                  onChange={(event) => {
                    setUsername(event.target.value);
                  }}
                  placeholder="Username"
                  className="input"
                />
              </div>
              <div className="field input-field">
                <input 
                required 
                type="email" 
                onChange={(event) => {
                  setEmail(event.target.value);
                }}
                placeholder="Email" 
                className="input" />
              </div>

              <div className="field input-field">
                <input
                  required
                  type="password"
                  onChange={(event) => {
                    setPassword(event.target.value);
                  }}
                  placeholder="Create password"
                  className="password"
                />
              </div>
              <div className="field button-field">
                <input type="submit" hidden />
                <button type="submit" >Signup</button>
              </div>
            </form>
            <div className="form-link">
              <span>
                Already have an account?{" "}
                <Link to="/" className="link login-link">
                  Login
                </Link>
              </span>
            </div>
          </div>
        </div>
      </section>
    </div>
    </div>
  );
};

export default Register;
