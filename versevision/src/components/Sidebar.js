import React, { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { UserAuth } from '../context/AuthContext';

function Sidebar() {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const handleNavigation = (path) => {
    navigate(path);
    setIsOpen(false); // Close menu after navigation
  };

  const isActive = (path) => {
    if (path === '/') {
      return location.pathname === '/';
    }
    return location.pathname.startsWith(path);
  };


  const {session, signOut} = UserAuth();
  
  const handleSignOut = async (e) => {
    e.preventDefault()
    try{
      await signOut()
      setIsOpen(false)
      navigate('/login')
    } catch (error){
      console.error(error);
    }
  }


  return (
    <>
      {/* Hamburger Button - Hidden on signin page */}
      {location.pathname !== '/login' && (
        <button 
          className={`hamburger ${isOpen ? 'open' : ''}`}
          onClick={toggleMenu}
          aria-label="Toggle menu"
        >
          <span></span>
          <span></span>
          <span></span>
        </button>
      )}

      {/* Sidebar */}
      <div className={`side-bar ${isOpen ? 'open' : ''}`}>
        <div className="sidebar-content">
          <div className="sidebar-header">
            <h2>Menu</h2>
          </div>
          <nav className="sidebar-nav">
            <ul>
              <li 
                className={isActive('/home') ? 'active' : ''}
                onClick={() => handleNavigation('/')}
              >
                Home
              </li>
              <li 
                className={isActive('/chat') ? 'active' : ''}
                onClick={() => handleNavigation('/chat')}
              >
                Chat
              </li>
              <li>Settings</li>
            </ul>
          </nav>
          
          {session && (
                <div className="sidebar-signout">
                <button 
                  className="signout-button"
                  onClick={handleSignOut}
                >
                  Sign Out
                </button>
              </div>
            )}

          {!session && (
              <div className="sidebar-signout">
              <button 
                className="signout-button"
                onClick={() => handleNavigation('/login')}
              >
                Login
              </button>
            </div>
          )}

        </div>
      </div>

      {/* Overlay for mobile */}
      {isOpen && <div className="sidebar-overlay" onClick={toggleMenu}></div>}
    </>
  );
}

export default Sidebar; 