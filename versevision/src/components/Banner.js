import React from 'react';
import NormalLogo from '../data/NormalLogo.png';

function Banner() {
  return (
    <div className="app-banner">
      <h1>VerseVision</h1>
      <img src={NormalLogo} alt="VerseVision Logo" />
    </div>
  );
}

export default Banner;