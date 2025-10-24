import React from 'react';
import '../VerseOfTheDay.css';
import Chat from './Chat';
import { useNavigate } from 'react-router-dom';

const VerseOfTheDay = ({ verse, text }) => {

  const navigate = useNavigate();
  const handleClick = () => {
      navigate("/chat", { state: { verse } });
      window.scrollTo(0, 0);
    };

  return (
    <div className="verse-of-day-banner" onClick={() => handleClick()}>
      <div className="verse-content">
        <span className="verse-reference">{verse}</span>
        <span className="verse-text">{text}</span>
      </div>
    </div>
  );
};

export default VerseOfTheDay; 