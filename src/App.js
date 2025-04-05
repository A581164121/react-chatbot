import React, { useState } from 'react';
import './App.css';
import { sendToOpenAI } from './sendToOpenAI';

function App() {
  const [messages, setMessages] = useState([]); // Store chat history
  const [userMessage, setUserMessage] = useState(''); // Current user input
  const [loading, setLoading] = useState(false); // Track if bot is thinking

  // Handle sending user message and receiving bot reply
  const handleSendMessage = async () => {
    if (!userMessage) return;

    setMessages([...messages, { user: userMessage, bot: '...' }]); // Add user message to chat history, placeholder for bot response
    setLoading(true);

    const botReply = await sendToOpenAI(userMessage); // Call OpenAI API
    setMessages([...messages, { user: userMessage, bot: botReply }]); // Add bot reply to chat history
    setLoading(false);
    setUserMessage(''); // Reset user input field
  };

  return (
    <div className="App">
      <h1>React Chatbot with OpenAI</h1>

      <div className="chat-container">
        {/* Display chat messages */}
        {messages.map((msg, index) => (
          <div key={index}>
            <div className="user-message">{msg.user}</div>
            <div className="bot-message">{msg.bot}</div>
          </div>
        ))}

        {/* Show loading spinner if bot is thinking */}
        {loading && <div className="loading-spinner">Thinking...</div>}

        {/* Input field for user message */}
        <input
          type="text"
          value={userMessage}
          onChange={(e) => setUserMessage(e.target.value)}
          placeholder="Ask something..."
        />
        <button onClick={handleSendMessage}>Send</button>
      </div>

      {/* Button to clear chat */}
      <button onClick={() => setMessages([])}>Clear Chat</button>
    </div>
  );
}

export default App;
