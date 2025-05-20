import { useState } from 'react'
import ChatInput from './components/ChatInput'
import ChatMessages from './components/ChatMessages'
import './App.css'

function App() {
  const [chatMessages, setChatMessages] = useState([
  ]);
  const [loading, setLoading] = useState(false);

  return (
    <div className="app-container">
      {chatMessages.length === 0 && <p className="welcome-text" >Welcome to the chatbot project! Send a message using the textbox below.</p>}
      <ChatMessages
        chatMessages={chatMessages}
        loading={loading}
        setLoading={setLoading}
      />
      <ChatInput
        chatMessages={chatMessages}
        setChatMessages={setChatMessages}
        loading={loading}
        setLoading={setLoading}
      />
    </div>
  );
}


export default App
