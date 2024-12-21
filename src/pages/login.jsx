
import React, { useState } from 'react'
import './Login.css'
import { X } from 'lucide-react';
const Login = ({ setShowLogin }) => {
  const [currentState, setCurrentState] = useState("Login")
  return (
    <div className='Login'>
      <form className='Login-container'>
        <div className="Login-title">
          <h2>{currentState} </h2>
          <X onClick={() => setShowLogin(false)} />
        </div>
        <div className='login-inputs'>
          {currentState === "Login" ? <></> : <input type='text' placeholder='Your Name' required />}
          <input type='email' placeholder='Your Email ' required />
          <input type='password' placeholder='Your Password ' required />
        </div>
        <button> {currentState === 'Sign Up' ? "Create Account" : "Login"}</button>

        <div className="login-condition">
          <input type="checkbox" id="terms" />
          <label htmlFor="terms">
            By continuing, I agree to the terms of use & privacy policy.
          </label>
        </div>

        {currentState === 'Login' ? <p>Create a new account?<span onClick={() => setCurrentState("Sign Up")}> Click here </span> </p>
          : <p> Already have an acoount? <span onClick={() => setCurrentState("Login")}> Login here </span> </p>
        }

      </form>
    </div>
  )
}

export default Login;
