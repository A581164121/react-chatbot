import React, { useState } from 'react';

function Chatbot() {
  const [messages, setMessages] = useState([
    { sender: 'bot', text: 'Hi! How can I help you today?' }
  ]);
  const [input, setInput] = useState('');

  const sendMessage = () => {
    if (!input.trim()) return;

    // Add user message
    const newMessages = [...messages, { sender: 'user', text: input }];

    // Fake bot response for now
    newMessages.push({ sender: 'bot', text: `You said: "${input}"` });

    setMessages(newMessages);
    setInput('');
  };

  return (
    <div style={{ maxWidth: '600px', margin: 'auto' }}>
      <h2>🧠 Chatbot</h2>
      <div style={{
        border: '1px solid #ccc', padding: '10px', height: '300px',
        overflowY: 'auto', marginBottom: '10px', background: '#f9f9f9'
      }}>
        {messages.map((msg, i) => (
          <div key={i} style={{ textAlign: msg.sender === 'user' ? 'right' : 'left' }}>
            <strong>{msg.sender === 'user' ? 'You' : 'Bot'}:</strong> {msg.text}
          </div>
        ))}
      </div>
      <input
        type="text"
        placeholder="Type your message..."
        value={input}
        onChange={(e) => setInput(e.target.value)}
        onKeyDown={(e) => e.key === 'Enter' && sendMessage()}
        style={{ width: '80%', padding: '10px' }}
      />
      <button onClick={sendMessage} style={{ padding: '10px' }}>Send</button>
    </div>
  );
}

export default Chatbot;
