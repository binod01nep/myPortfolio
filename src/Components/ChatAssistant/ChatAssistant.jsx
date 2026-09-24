import React, { useState, useRef, useEffect } from "react";
import { Link } from "react-router-dom";
import { generateResponse, presetQuestions } from "../../data/chatEngine";
import { portfolioData } from "../../data/portfolioData";

export default function ChatAssistant() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([
    {
      sender: "assistant",
      text: `Hello. I am ${portfolioData.personal.shortName}'s portfolio assistant. Select a prompt or type below to explore his work, skills, or experience.`,
    },
  ]);
  const [input, setInput] = useState("");
  const messagesEndRef = useRef(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    if (isOpen) {
      scrollToBottom();
    }
  }, [messages, isOpen]);

  const handleSend = (textToSend) => {
    const query = textToSend || input;
    if (!query.trim()) return;

    const userMessage = { sender: "user", text: query };
    const response = generateResponse(query);
    const assistantMessage = {
      sender: "assistant",
      text: response.text,
      action: response.action,
    };

    setMessages((prev) => [...prev, userMessage, assistantMessage]);
    setInput("");
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    handleSend();
  };

  return (
    <div className="fixed bottom-6 right-6 z-50 font-sans">
      {/* Floating Toggle Button */}
      {!isOpen && (
        <button
          type="button"
          onClick={() => setIsOpen(true)}
          className="flex items-center gap-2 px-3.5 py-2 bg-[#121212] hover:bg-[#1c1c1c] text-[#ededed] text-xs font-mono border border-[#2a2a2a] hover:border-[#444444] shadow-lg transition-colors cursor-pointer"
        >
          <span className="w-1.5 h-1.5 rounded-full bg-[#ededed]"></span>
          <span>Assistant</span>
          <span className="text-[#71717a] text-[10px]">/ ?</span>
        </button>
      )}

      {/* Assistant Modal / Popover */}
      {isOpen && (
        <div className="w-[340px] sm:w-[380px] h-[480px] max-h-[80vh] bg-[#121212] border border-[#262626] shadow-2xl flex flex-col justify-between overflow-hidden animate-fade-in text-xs">
          {/* Header */}
          <div className="px-4 py-3 bg-[#0a0a0a] border-b border-[#202020] flex items-center justify-between">
            <div className="flex items-center gap-2 font-mono">
              <span className="w-1.5 h-1.5 rounded-full bg-[#ededed]"></span>
              <span className="text-[#ededed] font-medium">Assistant</span>
              <span className="text-[#525252]">· offline</span>
            </div>
            <button
              type="button"
              onClick={() => setIsOpen(false)}
              className="text-[#71717a] hover:text-[#ededed] font-mono text-xs px-1"
              aria-label="Close assistant"
            >
              [ESC]
            </button>
          </div>

          {/* Messages Container */}
          <div className="flex-1 overflow-y-auto p-4 space-y-3">
            {messages.map((msg, index) => (
              <div
                key={index}
                className={`flex flex-col ${
                  msg.sender === "user" ? "items-end" : "items-start"
                }`}
              >
                <div
                  className={`max-w-[88%] px-3 py-2 leading-relaxed ${
                    msg.sender === "user"
                      ? "bg-[#222222] text-[#ededed] border border-[#333333]"
                      : "bg-[#181818] text-[#a1a1aa] border border-[#262626]"
                  }`}
                >
                  <p className="whitespace-pre-line">{msg.text}</p>

                  {/* Action Link inside response */}
                  {msg.action && (
                    <div className="mt-2.5 pt-2 border-t border-[#262626]">
                      {msg.action.external ? (
                        <a
                          href={msg.action.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-1 font-mono text-[11px] text-[#ededed] hover:underline"
                        >
                          <span>{msg.action.label}</span>
                          <span>↗</span>
                        </a>
                      ) : (
                        <Link
                          to={msg.action.link}
                          onClick={() => setIsOpen(false)}
                          className="inline-flex items-center gap-1 font-mono text-[11px] text-[#ededed] hover:underline"
                        >
                          <span>{msg.action.label}</span>
                          <span>→</span>
                        </Link>
                      )}
                    </div>
                  )}
                </div>
              </div>
            ))}
            <div ref={messagesEndRef} />
          </div>

          {/* Preset Prompts Chips */}
          <div className="px-3 py-2 bg-[#0e0e0e] border-t border-[#1c1c1c] overflow-x-auto flex gap-1.5 scrollbar-none whitespace-nowrap">
            {presetQuestions.map((question, i) => (
              <button
                key={i}
                type="button"
                onClick={() => handleSend(question)}
                className="shrink-0 font-mono text-[10px] px-2 py-1 bg-[#161616] hover:bg-[#242424] text-[#888888] hover:text-[#ededed] border border-[#222222] transition-colors"
              >
                {question}
              </button>
            ))}
          </div>

          {/* Input Footer */}
          <form
            onSubmit={handleSubmit}
            className="p-3 bg-[#0a0a0a] border-t border-[#202020] flex items-center gap-2"
          >
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Ask about skills, work, contact..."
              className="flex-1 bg-[#141414] border border-[#262626] text-[#ededed] placeholder:text-[#525252] px-3 py-1.5 text-xs font-sans focus:outline-none focus:border-[#525252]"
            />
            <button
              type="submit"
              className="font-mono text-xs px-3 py-1.5 bg-[#222222] hover:bg-[#2e2e2e] text-[#ededed] border border-[#333333] transition-colors"
            >
              Ask
            </button>
          </form>
        </div>
      )}
    </div>
  );
}
