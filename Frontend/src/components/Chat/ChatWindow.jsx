import React, { useRef, useEffect } from 'react';
import MessageBubble from './MessageBubble';

export default function ChatWindow({ messages }) {
  const scrollRef = useRef(null);

  // Auto scroll to bottom on new messages
  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages]);

  return (
    <div className="chat-container" ref={scrollRef}>
      <div className="message-list">
        {messages.length === 0 ? (
          <div style={{ textAlign: 'center', marginTop: '20vh', color: 'var(--text-muted)' }}>
            <h1 style={{ color: '#fff', marginBottom: '8px', fontSize: '24px' }}>How can I help you today?</h1>
            <p>Start a conversation by typing a message below.</p>
          </div>
        ) : (
          messages.map((msg, idx) => (
            <MessageBubble key={idx} message={msg} />
          ))
        )}
      </div>
    </div>
  );
}
