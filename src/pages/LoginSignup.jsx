import React from 'react'
import './CSS/LoginSignup.css'

const LoginSignup = () => {
  return (
    <div className='LoginSignup'>
        <div className="LoginSignup-container">
          <div className="form-section">
          <p className='signup'>Sign Up</p>
          <form className="inputs">
            <input type="text" placeholder=' Your Name'required/>
            <input type="email"placeholder='Your Email' name="" id="" required/>
            <input type="password"  placeholder='Password'required />
            <button type='submit'>Continue</button>
          </form>
          <p className='login'>Already have an account?<span>Login here</span></p>
          <div className='terms'>
              <input type="checkbox" />
              <p>By click to continue , I agree terms & privacy policy.</p>
          </div>
          </div>
        </div>
    </div>
  )
}

export default LoginSignup