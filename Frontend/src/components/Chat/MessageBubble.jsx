import React from 'react';
import { User, Bot } from 'lucide-react';

export default function MessageBubble({ message }) {
  const isUser = message.role === 'user';

  return (
    <div className={`message-bubble ${isUser ? 'user' : 'ai'}`}>
      <div className={`avatar ${isUser ? 'user' : 'ai'}`}>
        {isUser ? <User size={18} /> : <Bot size={18} />}
      </div>
      
      <div className="message-content">
        {message.loading ? (
          <div className="typing-loader">
            <span className="typing-dot"></span>
            <span className="typing-dot"></span>
            <span className="typing-dot"></span>
          </div>
        ) : (
          <div style={{ whiteSpace: 'pre-wrap' }}>
            {message.content}
          </div>
        )}
      </div>
    </div>
  );
}
