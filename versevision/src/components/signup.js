import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Banner from './Banner';
import './Auth.css';
import { UserAuth } from '../context/AuthContext';


const Signup = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')
  const [loading, setLoading] = useState('')
  const [success, setSuccess] = useState('')

  const {session, signUpNewUser} = UserAuth();
  const navigate = useNavigate()
  // console.log(session)

  const handleSignUp = async (e) => {
    e.preventDefault()
    setLoading(true)
    setError('')
    setSuccess('')
    
    try {
      const result = await signUpNewUser(email, password)
      if(result.success){
        setSuccess('Account created successfully! Please check your email to confirm your account.')
        setTimeout(() => {
          navigate('/login')
        }, 5000)
      }
    } catch (error) {
      setError("an error occurred")
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
            <h1>Join VerseVision</h1>
            <p>Create your account to start exploring biblical wisdom</p>
          </div>
          
          <form className="auth-form" onSubmit={handleSignUp}>
            
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
                placeholder="Create a password"
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </div>
            
            <div className="form-group">
              <label htmlFor="confirmPassword">Confirm Password</label>
              <input
                type="password"
                id="confirmPassword"
                name="confirmPassword"
                placeholder="Confirm your password"
                required
              />
            </div>
            
            <button type="submit" className="auth-button" disabled={loading}>
              Create Account
            </button>
          </form>
          
          {success && (
            <div className="auth-success">
              <div className="success-icon">✓</div>
              <p>{success}</p>
            </div>
          )}
          
          <div className="auth-footer">
            <p>Already have an account? <Link to="/login" className="auth-link">Sign in</Link></p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Signup;
