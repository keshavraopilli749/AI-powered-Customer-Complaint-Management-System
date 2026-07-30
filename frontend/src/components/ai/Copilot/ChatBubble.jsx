import React from 'react';
import { Bot, User } from 'lucide-react';
import clsx from 'clsx';
import styles from './copilot.module.css';

const ChatBubble = ({ isAi, message }) => {
  return (
    <div className={clsx(styles.bubbleWrapper, isAi ? styles.aiBubble : styles.userBubble)}>
      <div className={clsx(styles.avatar, isAi ? styles.aiAvatar : styles.userAvatar)}>
        {isAi ? <Bot size={18} /> : <User size={18} />}
      </div>
      <div className={clsx(styles.messageContent, isAi ? styles.aiMessage : styles.userMessage)}>
        {message}
      </div>
    </div>
  );
};

export default ChatBubble;
