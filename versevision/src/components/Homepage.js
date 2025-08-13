import React from 'react';
import VerseOfTheDay from './VerseOfTheDay';
import { getVerseOfTheDay } from '../utils/verseUtils';

function Homepage() {
  const verseOfDay = getVerseOfTheDay();

  return (
    <div className="homepage-wrapper">
      {verseOfDay && (
        <VerseOfTheDay
          verse={verseOfDay.verse}
          text={verseOfDay.text}
        />
      )}
      <div className="homepage-container">
        <div className="homepage-content">
          <h1 className="homepage-title">Welcome to VerseVision</h1>
          <p className="homepage-description">
            Your AI-powered companion for exploring and understanding biblical texts.
          </p>
          
          <div className="homepage-features">
            <div className="feature-card">
              <h3>📖 Biblical Insights</h3>
              <p>Get detailed explanations and interpretations of biblical passages</p>
            </div>
            
            <div className="feature-card">
              <h3>🤖 AI-Powered</h3>
              <p>Advanced AI technology to help you understand complex theological concepts</p>
            </div>
            
            <div className="feature-card">
              <h3>💬 Interactive Chat</h3>
              <p>Ask questions and receive thoughtful responses about scripture</p>
            </div>
          </div>
          
          <div className="homepage-cta">
            <p>Ready to explore? Click on "Chat" in the menu to start your journey!</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Homepage; 