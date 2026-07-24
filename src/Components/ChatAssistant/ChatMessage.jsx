/**
 * ChatMessage.jsx
 * Renders a single chat message bubble.
 * - User messages: right-aligned, emerald accent
 * - Assistant messages: left-aligned with bot icon, renders ResponseRenderer for rich content
 */
import React from 'react';
import ResponseRenderer from './ResponseRenderer';

const formatTime = (date) => {
  return date.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
};

const ChatMessage = ({ message }) => {
  const isUser = message.role === 'user';

  return (
    <div className={`chat-message ${isUser ? 'chat-message--user' : 'chat-message--bot'}`}>
      {!isUser && (
        <div className="chat-bot-avatar" aria-hidden="true">🤖</div>
      )}

      <div className={`chat-bubble ${isUser ? 'chat-bubble--user' : 'chat-bubble--bot'}`}>
        {isUser ? (
          <span className="chat-bubble-text">{message.content}</span>
        ) : (
          <ResponseRenderer response={message.response} />
        )}
        <span className="chat-timestamp">{formatTime(message.timestamp)}</span>
      </div>
    </div>
  );
};

export default ChatMessage;
