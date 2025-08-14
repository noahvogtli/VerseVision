import React from 'react';
import '../App.css'; 
import Banner from './Banner';

const Chat = ({ 
  messages, 
  query, 
  setQuery, 
  loading, 
  error, 
  handleSubmit, 
  messagesEndRef 
}) => {
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
            <input
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Ask about a Bible verse or Christian topic..."
            className="query-input"
            maxLength={200}
            />
            <button type="submit" disabled={loading} className="submit-button">
            Send
            </button>
        </form>
        {/* ✅ Character counter */}
        <div className="char-counter">
            {query.length}/200 characters
        </div>
        </div>
        </div>
    );
};

export default Chat; 