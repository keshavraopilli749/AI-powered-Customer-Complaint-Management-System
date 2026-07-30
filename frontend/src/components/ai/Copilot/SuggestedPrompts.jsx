import React from 'react';
import styles from './copilot.module.css';

const SuggestedPrompts = () => {
  const prompts = [
    "Summarize this complaint",
    "Identify missing information",
    "Classify complaint severity",
    "Suggest root cause",
    "Draft CAPA"
  ];

  return (
    <div className={styles.promptsContainer}>
      {prompts.map((prompt, idx) => (
        <button key={idx} className={styles.promptChip}>
          {prompt}
        </button>
      ))}
    </div>
  );
};

export default SuggestedPrompts;
