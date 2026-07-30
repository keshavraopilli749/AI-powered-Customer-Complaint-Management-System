import React from 'react';
import { Sparkles } from 'lucide-react';
import ChatBubble from './ChatBubble';
import ChatInput from './ChatInput';
import SuggestedPrompts from './SuggestedPrompts';
import styles from './copilot.module.css';

const AIChat = () => {
  return (
    <div className={styles.chatContainer}>
      <div className={styles.chatHeader}>
        <Sparkles size={20} color="var(--color-primary)" />
        <h3 className={styles.chatTitle}>QMS Copilot</h3>
      </div>
      
      <div className={styles.chatHistory}>
        <ChatBubble isAi={true} message="Hello! I'm your QMS AI Assistant. I have extracted the information from your uploaded document. How can I help you process this complaint?" />
        <ChatBubble isAi={false} message="What is the severity of this issue?" />
        <ChatBubble isAi={true} message="Based on the description of 'broken seal on the bottle', the severity is initially classified as Minor. However, if the product was consumed, it could escalate to Major. The regulatory risk remains low unless a trend is identified." />
      </div>

      <SuggestedPrompts />
      <ChatInput />
    </div>
  );
};

export default AIChat;
