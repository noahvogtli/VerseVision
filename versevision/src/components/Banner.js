import React from 'react';
import { useNavigate } from 'react-router-dom';
import NormalLogo from '../data/NormalLogo.png';

function Banner() {
  const navigate = useNavigate();

  return (
    <div className="app-banner">
      <h1 onClick={() => navigate('/')}>VerseVision</h1>
      <img src={NormalLogo} alt="VerseVision Logo" />
    </div>
  );
}

export default Banner;