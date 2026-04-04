import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';


const Signup = () => {
  const [firstname, setFirstname] = useState('')
  const [lastname, setLastname] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [password2, setPassword2] = useState('')
  const [error, setError] = useState('')
  const [loading, setLoading] = useState(false)
  const [success, setSuccess] = useState('')

  const { signUpNewUser } = useAuth();
  const navigate = useNavigate()

  const checkMatchingPasswords = (password1, password2) => {
    return password1 === password2;
  }

  const handleSignUp = async (e) => {
    e.preventDefault()
    setLoading(true)
    setError('')
    setSuccess('')

    if (checkMatchingPasswords(password, password2)) {
      try {
        let username = firstname + ' ' + lastname
        const result = await signUpNewUser(email, password, username)
        if (result.success) {
          setSuccess('Account created! Please check your email to confirm your account.')
          setTimeout(() => navigate('/login'), 8000)
        }
      } catch (error) {
        setError('An error occurred. Please try again.')
      } finally {
        setLoading(false)
      }
    } else {
      setError('Passwords do not match.')
      setLoading(false)
    }
  }

  return (
    <div className="flex flex-col items-center justify-center px-4 py-20">
      <div className="w-full max-w-sm">

        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold mb-2">Join VerseVision</h1>
          <p className="text-sm text-gray-500">Create your account to start exploring biblical wisdom</p>
        </div>

        <div className="border border-gray-200 rounded-xl p-8 shadow-sm bg-white">
          <form className="flex flex-col gap-5" onSubmit={handleSignUp}>

            <div className="flex flex-col gap-1.5">
              <label htmlFor="username" className="text-sm font-medium text-gray-700">
                First Name
              </label>
              <input
                type="text"
                id="firstname"
                name="firstname"
                placeholder="Enter your first name"
                onChange={(e) => setFirstname(e.target.value)}
                required
                className="w-full border border-gray-200 rounded-lg px-3 py-2 text-sm outline-none focus:ring-2 focus:ring-black/10 focus:border-gray-400 transition-colors placeholder:text-gray-400"
              />
            </div>

            <div className="flex flex-col gap-1.5">
              <label htmlFor="lastname" className="text-sm font-medium text-gray-700">
                Last Name
              </label>
              <input
                type="text"
                id="lastname"
                name="lastname"
                placeholder="Enter your last name"
                onChange={(e) => setLastname(e.target.value)}
                required
                className="w-full border border-gray-200 rounded-lg px-3 py-2 text-sm outline-none focus:ring-2 focus:ring-black/10 focus:border-gray-400 transition-colors placeholder:text-gray-400"
              />
            </div>

            <div className="flex flex-col gap-1.5">
              <label htmlFor="email" className="text-sm font-medium text-gray-700">
                Email Address
              </label>
              <input
                type="email"
                id="email"
                name="email"
                placeholder="Enter your email"
                onChange={(e) => setEmail(e.target.value)}
                required
                className="w-full border border-gray-200 rounded-lg px-3 py-2 text-sm outline-none focus:ring-2 focus:ring-black/10 focus:border-gray-400 transition-colors placeholder:text-gray-400"
              />
            </div>

            <div className="flex flex-col gap-1.5">
              <label htmlFor="password" className="text-sm font-medium text-gray-700">
                Password
              </label>
              <input
                type="password"
                id="password"
                name="password"
                placeholder="Create a password"
                onChange={(e) => setPassword(e.target.value)}
                required
                className="w-full border border-gray-200 rounded-lg px-3 py-2 text-sm outline-none focus:ring-2 focus:ring-black/10 focus:border-gray-400 transition-colors placeholder:text-gray-400"
              />
            </div>

            <div className="flex flex-col gap-1.5">
              <label htmlFor="confirmPassword" className="text-sm font-medium text-gray-700">
                Confirm Password
              </label>
              <input
                type="password"
                id="confirmPassword"
                name="confirmPassword"
                placeholder="Confirm your password"
                onChange={(e) => setPassword2(e.target.value)}
                required
                className="w-full border border-gray-200 rounded-lg px-3 py-2 text-sm outline-none focus:ring-2 focus:ring-black/10 focus:border-gray-400 transition-colors placeholder:text-gray-400"
              />
            </div>

            {error && (
              <p className="text-sm text-red-500">{error}</p>
            )}

            {success && (
              <p className="text-sm text-green-600">{success}</p>
            )}

            <button
              type="submit"
              disabled={loading}
              className="w-full bg-black text-white text-sm font-medium px-6 py-2.5 rounded-lg hover:bg-black/80 transition-colors duration-200 disabled:opacity-50 disabled:cursor-not-allowed mt-1"
            >
              {loading ? 'Creating Account...' : 'Create Account'}
            </button>
          </form>
        </div>

        <p className="text-center text-sm text-gray-500 mt-6">
          Already have an account?{' '}
          <Link to="/login" className="text-black font-medium hover:underline">
            Sign in
          </Link>
        </p>

        <p className="text-center text-xs text-gray-400 mt-3">
          By creating an account you agree to the Terms of Service and Privacy Policy
        </p>

      </div>
    </div>
  );
};

export default Signup;
