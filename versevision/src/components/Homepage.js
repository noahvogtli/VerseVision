import React from 'react';
import VerseOfTheDay from './VerseOfTheDay';
import { getVerseOfTheDay } from '../utils/verseUtils';
import Banner from './Banner';
import { useNavigate } from 'react-router-dom';

function Homepage() {
  const verseOfDay = getVerseOfTheDay();
  const navigate = useNavigate();

  return (
    <div className="homepage-wrapper">
      <Banner/>
      {verseOfDay && (
        <VerseOfTheDay
          verse={verseOfDay.verse}
          text={verseOfDay.text}
        />
      )}
      <div className="homepage-container">
        <div className="homepage-content">
          <div>
            <h1 className="homepage-title">VerseVision</h1>
            <p className="homepage-subtitle">Discover Scripture with clarity and care</p>
            <p className="homepage-description">
              Welcome to VerseVision—a simple, thoughtful way to spend time in the Word. 
              Explore a daily verse, ask honest questions, and learn more about the context 
              and meaning behind the passages you read.
            </p>
          </div>
          
          <div className="homepage-features">
            <div className="feature-card">
              <div className="feature-icon">
                <svg width="32" height="32" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M12 2L2 7L12 12L22 7L12 2Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M2 17L12 22L22 17" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M2 12L12 17L22 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
              <h3>Daily Inspiration</h3>
              <p>Begin with a verse of the day to reflect, share, and carry with you.</p>
            </div>
            
            <div className="feature-card">
              <div className="feature-icon">
                <svg width="32" height="32" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
              <h3>Study Tools</h3>
              <p>Get clear explanations, helpful context, and guidance for deeper reading.</p>
            </div>
            
            <div className="feature-card">
              <div className="feature-icon">
                <svg width="32" height="32" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
              <h3>Guided Conversation</h3>
              <p>Ask questions in plain language and receive thoughtful, easy-to-read answers.</p>
            </div>
          </div>
          
          <div className="homepage-cta">
            <h3>Start exploring</h3>
            <p>Open chat to ask a question or continue your study.</p>
            <div
              className="cta-button"
              onClick={() => navigate('/chat')}
              style={{ cursor: 'pointer' }}
            >
              <span>Open Chat</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Homepage; 