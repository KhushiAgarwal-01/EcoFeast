import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import '../Styling/signin.css';  

function signin() {
    const loading = false; // Example loading state
  const error = null; 
  return (
    <div className="container">
    <h1 className="title">Sign In</h1>
    {/* <form onSubmit={handelSubmit} className="form"> */}
    <form className="form">

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
        {loading ? 'loading...' : 'Sign In'}
      </button>
  
      {/* <OAuth /> */}
    </form>
  
    <div className="signup-link">
      <p>Don't have an Account?</p>
      <Link to={'/sign-up'}>
        <span className="text-link">Sign up</span>
      </Link>
    </div>
  
    {error && <p className="error-message">{error}</p>}
  </div>

  
  )
}

export default signin
