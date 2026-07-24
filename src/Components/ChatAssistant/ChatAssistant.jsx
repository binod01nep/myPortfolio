/**
 * ChatAssistant.jsx
 * Main floating AI Portfolio Chat Assistant component.
 * - Floating circular button (bottom-right)
 * - Opens into a glassmorphism dark chat window
 * - Keyboard: Enter=send, Shift+Enter=newline, ESC=close
 * - Auto-scrolls to newest message
 * - Fully responsive (mobile + desktop)
 */
import React, { useState, useEffect, useRef, useCallback } from 'react';
import { generateResponse } from '../../data/chatEngine';
import ChatMessage from './ChatMessage';
import SuggestionChips from './SuggestionChips';
import TypingIndicator from './TypingIndicator';

// ─── Welcome Message ──────────────────────────────────────────────────────
const WELCOME = {
  id: 'welcome',
  role: 'bot',
  timestamp: new Date(),
  response: {
    type: 'text',
    content:
      `Hello 👋\n\nI'm Binod's AI Portfolio Assistant.\n\nI can answer questions about:\n\n• Skills & Tech Stack\n• Projects Built\n• Education & GPA\n• Experience\n• Resume & CV\n• Contact & Social Links\n\nChoose a suggestion below or type your own question.`,
  },
};

// ─── Component ────────────────────────────────────────────────────────────
const ChatAssistant = ({ theme }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([WELCOME]);
  const [inputValue, setInputValue] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const [showChips, setShowChips] = useState(true);
  const [hasNewMessage, setHasNewMessage] = useState(false);

  const messagesEndRef = useRef(null);
  const inputRef = useRef(null);
  const chatWindowRef = useRef(null);

  const isLight = theme === 'light';

  // ─── Lock body scroll when chat is open ─────────────────────
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isOpen]);

  // ─── Auto-scroll ──────────────────────────────────────────────────────
  const scrollToBottom = useCallback(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, []);

  useEffect(() => {
    if (isOpen) {
      scrollToBottom();
    }
  }, [messages, isTyping, isOpen, scrollToBottom]);

  // ─── Focus input when opened ──────────────────────────────────────────
  useEffect(() => {
    if (isOpen) {
      setTimeout(() => inputRef.current?.focus(), 150);
    }
  }, [isOpen]);

  // ─── ESC to close ─────────────────────────────────────────────────────
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape' && isOpen) {
        setIsOpen(false);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen]);

  // ─── Notification pulse when closed ──────────────────────────────────
  useEffect(() => {
    if (!isOpen && messages.length > 1) {
      setHasNewMessage(true);
    } else {
      setHasNewMessage(false);
    }
  }, [messages, isOpen]);

  // ─── Send Message ─────────────────────────────────────────────────────
  const handleSend = useCallback(
    (query) => {
      const text = (query || inputValue).trim();
      if (!text) return;

      // Add user message
      const userMsg = {
        id: Date.now(),
        role: 'user',
        content: text,
        timestamp: new Date(),
        response: null,
      };

      setMessages((prev) => [...prev, userMsg]);
      setInputValue('');
      setIsTyping(true);
      setShowChips(false);

      // Simulate slight AI delay for realism
      const delay = 600 + Math.random() * 600;
      setTimeout(() => {
        const response = generateResponse(text);
        const botMsg = {
          id: Date.now() + 1,
          role: 'bot',
          timestamp: new Date(),
          response,
        };
        setMessages((prev) => [...prev, botMsg]);
        setIsTyping(false);
      }, delay);
    },
    [inputValue]
  );

  // ─── Keyboard handler ─────────────────────────────────────────────────
  const handleKeyDown = (e) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSend();
    }
  };

  // ─── Toggle open/close ────────────────────────────────────────────────
  const toggleChat = () => {
    setIsOpen((prev) => !prev);
  };

  return (
    <>
      {/* ── Backdrop Blur Overlay ─────────────────────────────── */}
      {isOpen && (
        <div
          className="chat-backdrop"
          onClick={toggleChat}
          aria-hidden="true"
        />
      )}

      {/* ── Chat Window ───────────────────────────────────────────────── */}
      <div
        ref={chatWindowRef}
        className={`chat-window ${isOpen ? 'chat-window--open' : 'chat-window--closed'} ${isLight ? 'chat-window--light' : 'chat-window--dark'}`}
        role="dialog"
        aria-modal="true"
        aria-label="AI Portfolio Assistant"
      >
        {/* Header */}
        <div className="chat-header">
          <div className="chat-header-left">
            <div className="chat-header-avatar" aria-hidden="true">🤖</div>
            <div className="chat-header-info">
              <span className="chat-header-title">AI Portfolio Assistant</span>
              <span className="chat-header-subtitle">
                <span className="chat-online-dot" aria-hidden="true" />
                Ask anything about Binod
              </span>
            </div>
          </div>
          <button
            onClick={toggleChat}
            className="chat-close-btn"
            aria-label="Close chat assistant"
          >
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" className="chat-close-icon">
              <path d="M18 6L6 18M6 6l12 12" />
            </svg>
          </button>
        </div>

        {/* Messages area */}
        <div className="chat-messages" role="log" aria-live="polite" aria-relevant="additions">
          {messages.map((msg) => (
            <ChatMessage key={msg.id} message={msg} />
          ))}

          {/* Suggestion chips (shown after welcome only) */}
          {showChips && messages.length === 1 && (
            <SuggestionChips onSelect={handleSend} />
          )}

          {/* Typing indicator */}
          {isTyping && <TypingIndicator />}

          {/* Scroll anchor */}
          <div ref={messagesEndRef} />
        </div>

        {/* Input area */}
        <div className="chat-input-area">
          <textarea
            ref={inputRef}
            className="chat-input"
            placeholder="Ask me anything about Binod..."
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            onKeyDown={handleKeyDown}
            rows={1}
            aria-label="Type your message"
            aria-multiline="true"
          />
          <button
            onClick={() => handleSend()}
            disabled={!inputValue.trim() || isTyping}
            className="chat-send-btn"
            aria-label="Send message"
          >
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" className="chat-send-icon">
              <line x1="22" y1="2" x2="11" y2="13" />
              <polygon points="22 2 15 22 11 13 2 9 22 2" />
            </svg>
          </button>
        </div>

        {/* Footer hint */}
        <div className="chat-footer-hint">
          <span>Enter to send · Shift+Enter for newline · ESC to close</span>
        </div>
      </div>

      {/* ── Floating Button ───────────────────────────────────────────── */}
      <button
        onClick={toggleChat}
        className={`chat-fab ${isOpen ? 'chat-fab--open' : ''}`}
        aria-label="Open AI Portfolio Assistant"
        title="Chat with Binod's AI Assistant"
      >
        {/* Pulse ring */}
        {!isOpen && <span className="chat-fab-ring" aria-hidden="true" />}

        {/* Icon: Bot when closed, X when open */}
        <span className="chat-fab-icon" aria-hidden="true">
          {isOpen ? (
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" className="w-6 h-6">
              <path d="M18 6L6 18M6 6l12 12" />
            </svg>
          ) : (
            <svg viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
              <path d="M12 2a2 2 0 012 2v1h4a2 2 0 012 2v8a2 2 0 01-2 2h-1l-2 3-2-3H7a2 2 0 01-2-2V7a2 2 0 012-2h4V4a2 2 0 012-2zm0 2v1H8a4 4 0 00-4 4v8a4 4 0 004 4h3.586l1.707 2.707a1 1 0 001.414 0L16.414 19H18a4 4 0 004-4V7a4 4 0 00-4-4h-4V4h-2z" fillRule="evenodd" clipRule="evenodd"/>
              <circle cx="9" cy="11" r="1" />
              <circle cx="12" cy="11" r="1" />
              <circle cx="15" cy="11" r="1" />
            </svg>
          )}
        </span>

        {/* Notification badge */}
        {hasNewMessage && !isOpen && (
          <span className="chat-fab-badge" aria-label="New message">●</span>
        )}
      </button>
    </>
  );
};

export default ChatAssistant;
