import React, { useState } from 'react';

function Sidebar({ currentPage, onNavigate }) {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const handleNavigation = (page) => {
    onNavigate(page);
    setIsOpen(false); // Close menu after navigation
  };

  return (
    <>
      {/* Hamburger Button */}
      <button 
        className={`hamburger ${isOpen ? 'open' : ''}`}
        onClick={toggleMenu}
        aria-label="Toggle menu"
      >
        <span></span>
        <span></span>
        <span></span>
      </button>

      {/* Sidebar */}
      <div className={`side-bar ${isOpen ? 'open' : ''}`}>
        <div className="sidebar-content">
          <div className="sidebar-header">
            <h2>Menu</h2>
          </div>
          <nav className="sidebar-nav">
            <ul>
              <li 
                className={currentPage === 'home' ? 'active' : ''}
                onClick={() => handleNavigation('home')}
              >
                Home
              </li>
              <li 
                className={currentPage === 'chat' ? 'active' : ''}
                onClick={() => handleNavigation('chat')}
              >
                Chat
              </li>
              <li>Settings</li>
            </ul>
          </nav>
        </div>
      </div>

      {/* Overlay for mobile */}
      {isOpen && <div className="sidebar-overlay" onClick={toggleMenu}></div>}
    </>
  );
}

export default Sidebar; 