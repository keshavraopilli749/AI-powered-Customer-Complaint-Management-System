import React from 'react';
import { Send } from 'lucide-react';
import styles from './copilot.module.css';

const ChatInput = () => {
  return (
    <div className={styles.inputContainer}>
      <div className={styles.inputWrapper}>
        <textarea 
          className={styles.textarea} 
          placeholder="Ask Copilot to summarize, find missing fields, or draft a CAPA..."
          rows={1}
        />
        <button className={styles.sendBtn}>
          <Send size={16} />
        </button>
      </div>
    </div>
  );
};

export default ChatInput;
