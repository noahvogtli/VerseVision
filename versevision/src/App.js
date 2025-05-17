import './App.css';
import { useState, useRef, useEffect } from 'react';
import Sidebar from './components/Sidebar';

function App() {
  const [messages, setMessages] = useState([]);
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
    setMessages(prev => [...prev, { type: 'user', content: userMessage }]);

    if (cache[userMessage]) {
      setMessages(prev => [...prev, { type: 'assistant', content: cache[userMessage] }]);
      return;
    }

    setLoading(true);
    setError('');

    try {
      const res = await fetch('http://localhost:3001/api/chat', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ query: userMessage }),
      });

      if (!res.ok) {
        throw new Error('Failed to get response');
      }

      const data = await res.json();
      setMessages(prev => [...prev, { type: 'assistant', content: data.response }]);
      setCache(prev => ({ ...prev, [userMessage]: data.response }));
    } catch (err) {
      setError('Failed to get response. Please try again.');
      console.error('Error:', err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      <Sidebar />
      <div className="chat-container">
        <h1 className="title">VerseVision</h1>
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
              maxLength={200} // ✅ UI character limit
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
    </div>
  );
}

export default App;
