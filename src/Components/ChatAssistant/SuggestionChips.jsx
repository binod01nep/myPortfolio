/**
 * SuggestionChips.jsx
 * Horizontally scrollable clickable suggestion chips shown
 * at the start of the conversation (like ChatGPT suggestions).
 */
import React from 'react';
import { suggestions } from '../../data/chatEngine';

const SuggestionChips = ({ onSelect }) => {
  return (
    <div className="chat-chips-wrapper">
      <div className="chat-chips-scroll">
        {suggestions.map((s, i) => (
          <button
            key={i}
            className="chat-chip"
            onClick={() => onSelect(s.query)}
            title={s.query}
          >
            {s.label}
          </button>
        ))}
      </div>
    </div>
  );
};

export default SuggestionChips;
