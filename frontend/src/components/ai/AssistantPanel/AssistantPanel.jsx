import React, { useState } from 'react';
import UploadArea from '../Upload/UploadArea';
import UploadProgress from '../Upload/UploadProgress';
import ProcessingTimeline from '../Timeline/ProcessingTimeline';
import ExtractedFields from '../Extraction/ExtractedFields';
import ConfidenceCard from '../Extraction/ConfidenceCard';
import AIChat from '../Copilot/AIChat';
import ComplaintSummary from '../Insights/ComplaintSummary';
import RiskCard from '../Insights/RiskCard';
import MissingFields from '../Insights/MissingFields';
import RecommendationCard from '../Insights/RecommendationCard';
import EmptyAssistant from '../EmptyState/EmptyAssistant';
import styles from './assistantPanel.module.css';

const AssistantPanel = () => {
  const [hasUploaded, setHasUploaded] = useState(false);

  const handleUpload = () => {
    setHasUploaded(true);
  };

  return (
    <div className={styles.panelContainer}>
      <div className={styles.leftColumn}>
        <UploadArea onUpload={handleUpload} />
        {hasUploaded && (
          <>
            <UploadProgress />
            <ProcessingTimeline />
            <ExtractedFields />
            <ConfidenceCard />
          </>
        )}
      </div>
      
      <div className={styles.rightColumn}>
        {!hasUploaded ? (
          <EmptyAssistant />
        ) : (
          <>
            <ComplaintSummary />
            <MissingFields />
            <RiskCard />
            <RecommendationCard />
            <AIChat />
          </>
        )}
      </div>
    </div>
  );
};

export default AssistantPanel;
