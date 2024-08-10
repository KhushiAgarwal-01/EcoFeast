import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import '../Styling/signup.css';  

function signup() {
    const loading = false; // Example loading state
    const error = null; 
  return (
    <div className="container">
    <h1 className="title">Sign Up</h1>
    {/* <form onSubmit={handelSubmit} className="form"> */}
    <form  className="form">

      <input
        type="text"
        placeholder="username"
        className="input"
        id="username"
        // onChange={handelChange}
      />

      <input
        type="email"
        placeholder="email"
        className="input"
        id="email"
        // onChange={handelChange}
      />
  
      <input
        type="password"
        placeholder="password"
        className="input"
        id="password"
        // onChange={handelChange}
      />
  
      <button
        disabled={loading}
        className={`button ${loading ? 'loading' : ''}`}
      >
        {loading ? 'loading...' : 'Sign Up'}
      </button>
      {/* <OAuth /> */}
    </form>
  
    <div className="signin-link">
      <p>Already have an Account?</p>
      <Link to={'/sign-in'}>
        <span className="text-link">Sign in</span>
      </Link>
    </div>
  
    {error && <p className="error-message">{error}</p>}
  </div>
  
  )
}

export default signup
