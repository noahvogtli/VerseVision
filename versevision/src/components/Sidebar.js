import React from 'react';

function Sidebar() {
  return (
    <div className="side-bar">
      <div className="sidebar-content">
        <div className="sidebar-header">
          <h2>Menu</h2>
        </div>
        <nav className="sidebar-nav">
          <ul>
            <li>Home</li>
            <li>History</li>
            <li>Settings</li>
          </ul>
        </nav>
      </div>
    </div>
  );
}

export default Sidebar; 