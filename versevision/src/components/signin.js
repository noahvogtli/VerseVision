import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Banner from './Banner';
import './Auth.css';
import { UserAuth } from '../context/AuthContext';
import { useNavigate } from 'react-router-dom';


const Signin = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')
  const [loading, setLoading] = useState('')

  const {session, signInUser} = UserAuth();
  const navigate = useNavigate()

  const handleSignIn = async (e) => {
    e.preventDefault();
    setLoading(true)
    try {
      const result = await signInUser(email, password)
      if(result.success){
        navigate('/')
      } else {
        // Handle login failure
        setError(result.error || "Invalid email or password.")
      }
    } catch (error) {
      setError("Invalid email or password.")
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="auth-container">
      <Banner />
      <div className="auth-content">
        <div className="auth-card">
          <div className="auth-header">
            <h1>Welcome Back</h1>
            <p>Sign in to continue your biblical journey</p>
          </div>
          
          <form className="auth-form" onSubmit={handleSignIn}>
            
            <div className="form-group">
              <label htmlFor="email">Email Address</label>
              <input
                type="email"
                id="email"
                name="email"
                placeholder="Enter your email"
                onChange={(e => setEmail(e.target.value))}
                required
              />
            </div>
            
            <div className="form-group">
              <label htmlFor="password">Password</label>
              <input
                type="password"
                id="password"
                name="password"
                placeholder="Enter your password"
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </div>
            {error && (
              <p style={{ color: "red" }}>Invalid email or password.</p>
            )}
            
            <button type="submit" className="auth-button" disabled={loading}>
              {loading ? (
                  <span>Signing In...</span>
              ) : (
                'Log In'
              )}
            </button>
          </form>

          
          <div className="auth-footer">
            <p>Don't have an account? <Link to="/signup" className="auth-link">Sign up</Link></p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Signin;
