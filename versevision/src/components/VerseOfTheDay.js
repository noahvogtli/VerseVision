import React from 'react';
import '../VerseOfTheDay.css';

const VerseOfTheDay = ({ verse, text }) => {
  return (
    <div className="verse-of-day-banner">
      <div className="verse-content">
        <span className="verse-reference">{verse}</span>
        <span className="verse-text">{text}</span>
      </div>
    </div>
  );
};

export default VerseOfTheDay; 