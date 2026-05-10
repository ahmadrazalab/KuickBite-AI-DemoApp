import React, { useState } from 'react';
import axios from 'axios';
import Sidebar from '../Sidebar/Sidebar';
import ChatWindow from '../Chat/ChatWindow';
import ChatInput from '../Chat/ChatInput';

// Default fallback for local dev if env is missing
const API_URL = import.meta.env.VITE_API_URL || 'http://localhost:5000';

export default function ChatLayout() {
  const [messages, setMessages] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const handleSendMessage = async (text) => {
    // 1. Add User Message
    const userMsg = { role: 'user', content: text };
    setMessages((prev) => [...prev, userMsg]);
    
    // 2. Add temporary loading AI message
    const tempAiMsg = { role: 'ai', loading: true };
    setMessages((prev) => [...prev, tempAiMsg]);
    
    setIsLoading(true);

    try {
      const response = await axios.post(`${API_URL}/api/chat`, {
        message: text
      });

      const aiReply = response.data.reply;

      // 3. Replace loading state with actual content
      setMessages((prev) => {
        const newMsgs = [...prev];
        newMsgs[newMsgs.length - 1] = { role: 'ai', content: aiReply, loading: false };
        return newMsgs;
      });
    } catch (error) {
      console.error('API Chat Error:', error);
      // Set descriptive error msg in UI
      setMessages((prev) => {
        const newMsgs = [...prev];
        newMsgs[newMsgs.length - 1] = { 
          role: 'ai', 
          content: "⚠️ Sorry, I encountered an error connecting to the server. Please ensure backend is running and API keys are correctly set.", 
          loading: false 
        };
        return newMsgs;
      });
    } finally {
      setIsLoading(false);
    }
  };

  const resetChat = () => {
    setMessages([]);
  };

  return (
    <div className="layout-wrapper">
      <Sidebar onNewChat={resetChat} />
      
      <main className="main-content">
        <ChatWindow messages={messages} />
        <ChatInput onSendMessage={handleSendMessage} isLoading={isLoading} />
      </main>
    </div>
  );
}
