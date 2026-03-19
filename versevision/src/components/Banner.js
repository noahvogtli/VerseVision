import React from 'react';
import { useNavigate } from 'react-router-dom';
import NormalLogo from '../data/NormalLogo.png';
import Sidebar from './Sidebar';

function Banner() {

  const navigate = useNavigate();
  const handleNavigation = (path) => {
      navigate(path);
      window.scrollTo(0, 0); 
    };

  return (
    <div className="app-banner">
      <Sidebar />
      <h1 onClick={() => handleNavigation('/')}>VerseVision</h1>
      <img src={NormalLogo} alt="VerseVision Logo" />
    </div>
  );
}

export default Banner;