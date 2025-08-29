import React, { useState, useRef, useEffect } from 'react';
import '../App.css';
import Banner from './Banner';

const Chat = () => {
  const [messages, setMessages] = useState([
    { type: 'assistant', content: 'Hello, welcome to VerseVision: your personal Bible study assistant. Feel free to ask any questions you have related to the Bible or Christianity.' }
  ]);
  const [query, setQuery] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [cache, setCache] = useState({});
  const messagesEndRef = useRef(null);

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
      const res = await fetch('https://versevision.onrender.com/api/chat', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ query: userMessage, history: messages }),
      });

      if (!res.ok) {
        throw new Error('Failed to get response');
      }

      const data = await res.json();
      setMessages(prev => [...prev, { type: 'assistant', content: data.response }]);
      // console.log("Messages:", messages);
      // console.log("Latest message:", data.response);
      setCache(prev => ({ ...prev, [userMessage]: data.response }));
    } catch (err) {
      setError('Failed to get response. Please try again.');
      console.error('Error:', err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="chat-container">
      <Banner/>
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
            rows="1"
            onInput={(e) => {
              e.target.style.height = 'auto';
              e.target.style.height = e.target.scrollHeight + 'px';
            }}
          />
          <button type="submit" disabled={loading} className="submit-button">
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