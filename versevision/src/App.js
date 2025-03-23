import './App.css';

function App() {
  return (
    <div className="App">
      <div className="coming-soon-container">
        <h1 className="title">Welcome to VerseVision!</h1>
        <div className="content">
          <div className="coming-soon-badge">
            <span className="book-emoji">📖</span>
            <span>Coming Soon – A smarter way to explore scripture</span>
          </div>
          <p className="description">
            The Bible is rich with wisdom, but let's be honest - it's not always easy to understand. Whether you're a new believer, someone who has been a Christian your whole life, or just curious about the Bible, this resource is for you.
            <br /><br />
            VerseVision is an AI-powered tool designed to help you dive deeper into scripture by breaking down verses with historical context, theological insights, and real-world applications.
            <br /><br />
            Even if you have never read the Bible before, we invite you to explore and see what it has to say in a way that makes sense.
          </p>
          <p className="coming-soon-text">
            Check back daily for updates!
          </p>
          <div className="contact-section">
            <p>Have questions or feedback?</p>
            <div className="contact-links">
              <a href="mailto:noahvogtli88@gmail.com" className="contact-link">
                <span className="contact-icon">✉️</span>
                noahvogtli88@gmail.com
              </a>
              <a href="https://www.linkedin.com/in/noahvogtli/" className="contact-link" target="_blank" rel="noopener noreferrer">
                <span className="contact-icon">🔗</span>
                LinkedIn
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
