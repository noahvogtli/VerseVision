import React from 'react';
import './App.css';
import { useState, useRef, useEffect } from 'react';
import Sidebar from './components/Sidebar';
import Chat from './components/Chat';
//npm run server
//npm start

const App = () => {
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
      const res = await fetch('https://versevision.onrender.com/api/chat', {
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
      <Chat 
        messages={messages}
        query={query}
        setQuery={setQuery}
        loading={loading}
        error={error}
        handleSubmit={handleSubmit}
        messagesEndRef={messagesEndRef}
      />
    </div>
  );
};

export default App;
