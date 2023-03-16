import React from 'react'
import { Link } from 'react-router-dom'
import './Register.css'


const Register = () => {
  return (
    <div className='auth'>
        <h1>Sign up</h1>
        <form>
            <input required type="text" placeholder='Username' />
            <input type="text" placeholder='Full name' />
            <input required type="email" placeholder='Email' />
            <input required type="password" placeholder='Password' />
            <button>Sign up</button>
            <p>The email or password you enter is not valid!</p> 
            <span>Already have an account? <Link to="/login">Login!</Link>
            </span>
        </form>
    </div>
  
  )
}

export default Register