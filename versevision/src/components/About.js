import React from 'react';
import Banner from './Banner';

function About() {
  return (
    <div className="homepage-wrapper">
      <Banner/>
      <div className="homepage-container">
        <div className="homepage-content">
          <div>
            <h1 className="homepage-title">About VerseVision</h1>
            <p className="homepage-subtitle">A simple place to read, learn, and grow</p>
            <p className="homepage-description">
            The Bible is rich with wisdom, but let's be honest - it's not always easy to understand. Whether you're a new believer, someone who has been a Christian your whole life, or just curious about the Bible, this resource is for you.<br></br><br></br>

            VerseVision is an AI-powered tool designed to help you dive deeper into scripture by breaking down verses with historical context, theological insights, and real-world applications.<br></br><br></br>

            Even if you have never read the Bible before, I invite you to explore and see what it has to say in a way that makes sense.
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
              <h3>Our Purpose</h3>
              <p>Make Scripture approachable with clear explanations and gentle guidance.</p>
            </div>

            <div className="feature-card">
              <div className="feature-icon">
                <svg width="32" height="32" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
              <h3>How It Helps</h3>
              <p>Find daily encouragement and trustworthy answers to your questions.</p>
            </div>

            <div className="feature-card">
              <div className="feature-icon">
                <svg width="32" height="32" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
              <h3>Our Approach</h3>
              <p>Friendly, easy to read, and focused on clarity and care.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;

