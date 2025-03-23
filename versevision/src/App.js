import './App.css';

function App() {
  return (
    <div className="App">
      <div className="coming-soon-container">
        <h1 className="title">Welcome to VerseVision!</h1>
        <div className="content">
          <p className="description">
            The Bible is rich with wisdom, but let's be honest—it's not always easy to understand. Whether you're a new believer, someone who has been a Christian your whole life, or just curious about the Bible, this resource is for you.
            <br /><br />
            VerseVision is an AI-powered tool designed to help you dive deeper into scripture by breaking down verses with historical context, theological insights, and real-world applications.
            <br /><br />
            Even if you're not a believer, we invite you to explore and see what the Bible has to say in a way that makes sense.
          </p>
          <p className="coming-soon-text">
            We're currently building something amazing—stay tuned for updates!
          </p>
          <div className="coming-soon-badge">
            <span className="book-emoji">📖</span>
            <span>Coming Soon – A smarter way to explore scripture</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
