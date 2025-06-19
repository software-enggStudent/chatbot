import { useState } from 'react';
import './App.css';

function App() {
  const [input, setInput] = useState('');
  const [messages, setMessages] = useState([
    { sender: 'bot', text: 'Hi! I am your assistant. How can I help you today?' }
  ]);

  const getBotResponse = (userInput) => {
    const text = userInput.toLowerCase();
    if (text.includes('hello') || text.includes('hi')) return 'Hello there!';
    if (text.includes('how are you') || text.includes('kaise ho')) return 'I am good';
    if (text.includes('your name')) return 'I am a bot created by OpenAI';
    if (text.includes('bye')) return 'Good bye!!! Have a great day!!';
    return 'Sorry! I did not understand that';
  };

  const handleSend = () => {
    if (!input.trim()) return;
    const userMsg = { sender: 'user', text: input };
    const botMsg = { sender: 'bot', text: getBotResponse(input) };
    setMessages(prev => [...prev, userMsg, botMsg]);
    setInput('');
  };

  return (
    <div className="chat-container">
      <div className="messages">
        {messages.map((message, idx) => (
          <div
            key={idx}
            className={`message ${message.sender}`}
          >
            {message.text}
          </div>
        ))}
      </div>
      <div className="input-area">
        <input
          type="text"
          placeholder="Type your message here"
          value={input}
          onChange={e => setInput(e.target.value)}
          onKeyPress={e => { if (e.key === 'Enter') handleSend(); }}
        />
        <button onClick={handleSend}>Send</button>
      </div>
    </div>
  );
}

export default App;
