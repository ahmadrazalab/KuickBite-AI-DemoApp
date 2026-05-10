import React from 'react';
import { Plus, MessageSquare, LogOut, User } from 'lucide-react';

export default function Sidebar({ onNewChat }) {
  // Mock history items
  const historyItems = [
    "React vs Vue in 2026",
    "Explain dark matter",
    "Express middleware guide",
    "Chicken Biryani recipe"
  ];

  return (
    <aside className="sidebar">
      <button className="new-chat-btn" onClick={onNewChat}>
        <Plus size={16} />
        New Chat
      </button>
      
      <div className="history-list">
        {historyItems.map((item, idx) => (
          <div key={idx} className="history-item">
            <MessageSquare size={14} />
            <span>{item}</span>
          </div>
        ))}
      </div>

      <div style={{ marginTop: 'auto', paddingTop: '12px', borderTop: '1px solid rgba(255,255,255,0.1)', display: 'flex', flexDirection: 'column', gap: '8px' }}>
        <div className="history-item">
          <User size={14} />
          <span>Upgrade Plan</span>
        </div>
        <div className="history-item">
          <LogOut size={14} />
          <span>Log out</span>
        </div>
      </div>
    </aside>
  );
}
