import React, { useState, useRef, useEffect } from 'react';
import '../App.css';
import Banner from './Banner';
import { useLocation } from "react-router-dom";


const Chat = () => {
  const [messages, setMessages] = useState([]);
  const [query, setQuery] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [cache, setCache] = useState({});
  const messagesEndRef = useRef(null);

  const location = useLocation();
  const verseFromBanner = location.state?.verse;
  
  useEffect(() => {
    if (verseFromBanner) {
      setQuery(verseFromBanner);
    }
  }, [verseFromBanner]);
  
  useEffect(() => {
    if (query && verseFromBanner) {
      // Give React time to render the button before clicking
      const timer = setTimeout(() => {
        const btn = document.getElementById('submit-button');
        if (btn) btn.click();
      }, 300); // small delay (300ms) ensures element exists
      return () => clearTimeout(timer);
    }
  }, [query, verseFromBanner]);
  



  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const resetTextareaHeight = () => {
    const textarea = document.querySelector('.query-input');
    if (textarea) {
      textarea.style.height = 'auto';
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!query.trim()) return;

    // 🔒 Additional safety check for character length
    if (query.length > 200) {
      setError('Please keep your message under 200 characters.');
      return;
    }

    const userMessage = query.trim();
    setQuery('');
    resetTextareaHeight();
    setMessages(prev => [...prev, { type: 'user', content: userMessage }]);

    if (cache[userMessage]) {
      setMessages(prev => [...prev, { type: 'assistant', content: cache[userMessage] }]);
      return;
    }

    setLoading(true);
    setError('');

    try {
      const res = await fetch('http://localhost:3001/api/chat', {
        // localhost:3001/
        // https://versevision.onrender.com/api/chat
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ 
          message: userMessage,
          history: messages
        }),
      });

      if (!res.ok) {
        throw new Error('Failed to get response');
      }

      const data = await res.json();
      console.log("API response:", data);
      
      // Extract the reply from the server response
      const responseContent = data.reply || 'No response received';
      
      console.log("Extracted response content:", responseContent);
      
      setMessages(prev => [...prev, { type: 'assistant', content: responseContent }]);
      setCache(prev => ({ ...prev, [userMessage]: responseContent }));
    } catch (err) {
      setError('Failed to get response. Please try again.');
      console.error('Error:', err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="chat-container">
      
      <div className="chat-box">
        <div className="messages">
          {messages.map((message, index) => (
            <div key={index} className={`message ${message.type}`}>
              <div className="message-content">{message.content}</div>
            </div>
          ))}
          {loading && (
            <div className="message assistant">
              <div className="message-content">
                <div className="loading-spinner"></div>
                <span>Thinking...</span>
              </div>
            </div>
          )}
          {error && (
            <div className="message error">
              <div className="message-content">{error}</div>
            </div>
          )}
          <div ref={messagesEndRef} />
        </div>
        <form onSubmit={handleSubmit} className="input-form">
          <textarea
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Ask anything..."
            className="query-input"
            maxLength={200}
            onKeyDown={(e) => {
              if (e.key === 'Enter' && !e.shiftKey) {
                e.preventDefault();
                handleSubmit(e);
              }
            }}
            rows="1"
            onInput={(e) => {
              e.target.style.height = 'auto';
              e.target.style.height = e.target.scrollHeight + 'px';
            }}
          />
          <button type="submit" disabled={loading} className="submit-button" id='submit-button'>
            Send
          </button>
        </form>
        
        <div className="char-counter">
          {query.length}/200 characters
        </div>
      </div>
    </div>
  );
};

export default Chat; 