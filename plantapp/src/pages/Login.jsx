import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./Forms.css";

const Login = ({setUserId}) => {
  const [username, setUsername] = useState("");
  const navigate = useNavigate();

<<<<<<< HEAD
const Login = () => {
  return (
    // <div className='auth'>
    //     <h1>Login</h1>
    //     <form>
    //         <input required type="text" placeholder='Username' />
    //         <input required type="email" placeholder='Email' />
    //         <button>Login</button>
    //         <p>The email or password you enter is not valid!</p>
    //         <span>Don't have an account? <Link to="/register">Sign up!</Link>
    //         </span>
    //     </form>
    // </div>
    // <!-- Log in Form -->
<div id="background">
<section className="container forms">
   <div className="form login">
       <div className="form-content">
           <header>Login</header>
           <form>
               <div className="field input-field">
                   <input required type="text" placeholder="Username" className="input"/>
               </div>
               <div className="field input-field">
                   <input required type="password" placeholder="Password" className="password"/>
               </div>
               <div className="form-link">
                   <a href="#" className="forgot-pass">Forgot password?</a>
               </div>
               <div className="field button-field">
                   <button>Login</button>
               </div>
               {/* <p>The email or password you entered is not valid!</p> */}
           </form>

           <div className="form-link">
               <span>Don't have an account? <Link to="/register" class="link signup-link">Signup!</Link> </span>
           </div>
       </div>

      
=======
  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch("http://localhost:3001/api/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ userName: username }),
      });
      const data = await response.json();
      if (response.ok) {
        console.log(data);
        setUserId(data.userId)
        navigate("/");
      } else {
        // Display error message to user
      }
    } catch (error) {
      console.log(error);
    }
  };
>>>>>>> main

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
  );
};

export default Login;
