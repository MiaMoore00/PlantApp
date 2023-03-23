import React from 'react'
import { Link } from 'react-router-dom'
import './Forms.css'


const Register = () => {
  return (
    // <div className='auth '>
    //     <h1>Sign up</h1>
    //     <form>
    //         <input required type="text" placeholder='Username' />
    //         <input type="text" placeholder='Full name' />
    //         <input required type="email" placeholder='Email' />
    //         <input required type="password" placeholder='Password' />
    //         <button>Sign up</button>
    //         <p>The email or password you enter is not valid!</p> 
    //         <span>Already have an account? <Link to="/login">Login!</Link>
    //         </span>
    //     </form>
    // </div>
<div id="background">
<section className="container forms flex">
<div className="form signup">
    <div className="form-content">
        <header>Signup</header>
        <form>
            <div className="field input-field">
                <input required type="text" placeholder="Username" className="input"/>
            </div>
            <div className="field input-field">
                <input type="text" placeholder="Full Name" className="input"/>
            </div>
            <div className="field input-field">
                <input required type="email" placeholder="Email" className="input"/>
            </div>

            <div className="field input-field">
                <input required type="password" placeholder="Create password" className="password"/>
            </div>
            <div className="field button-field">
                <button>Signup</button>
                {/* <p>The email or password you enter is not valid!</p> */}
            </div>
        </form>
        <div className="form-link">
            <span>Already have an account? <Link to="/login" className="link login-link">Login</Link></span>
        </div>
    </div>
  </div>
</section>
</div>
  
  )
}

export default Register