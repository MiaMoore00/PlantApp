import React from 'react'
import { Link } from 'react-router-dom'
import './Register.css'

const Register = () => {
  return (
    <div className='auth'>
        <h1>Sign up</h1>
        <form>
            <input required type="text" placeholder='username' />
            <input required type="text" placeholder='lastname' />
            <input required type="email" placeholder='email' />
            <input required type="password" placeholder='password' />
            <button>Sign up</button>
            <p>The email or password you enter is not valid!</p> 
            <span>Already have an account? <Link to="/login">Login!</Link>
            </span>
        </form>
    </div>
  
  )
}

export default Register