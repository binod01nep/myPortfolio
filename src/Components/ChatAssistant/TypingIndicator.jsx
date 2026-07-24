/**
 * TypingIndicator.jsx
 * Animated three-dot typing indicator shown while the assistant "thinks".
 */
import React from 'react';

const TypingIndicator = () => {
  return (
    <div className="chat-typing-indicator">
      <div className="chat-typing-avatar">🤖</div>
      <div className="chat-typing-bubble">
        <span className="chat-dot" style={{ animationDelay: '0ms' }} />
        <span className="chat-dot" style={{ animationDelay: '160ms' }} />
        <span className="chat-dot" style={{ animationDelay: '320ms' }} />
      </div>
    </div>
  );
};

export default TypingIndicator;
