import React from 'react';
import './ComplaintTimeline.css';

const ComplaintTimeline = () => {
    return (
        <div className="timeline-container">
            <h3 className="section-title">Complaint Lifecycle</h3>
            <div className="timeline">
                <div className="timeline-item completed">
                    <div className="timeline-marker"></div>
                    <div className="timeline-content">
                        <h4>Complaint Logged</h4>
                        <p>Jul 28, 2026 - 10:30 AM</p>
                    </div>
                </div>
                <div className="timeline-item completed">
                    <div className="timeline-marker"></div>
                    <div className="timeline-content">
                        <h4>AI Extraction & Risk Assessment</h4>
                        <p>Jul 28, 2026 - 10:32 AM</p>
                    </div>
                </div>
                <div className="timeline-item active">
                    <div className="timeline-marker"></div>
                    <div className="timeline-content">
                        <h4>Pending Investigation</h4>
                        <p>Assigned to QA Team</p>
                    </div>
                </div>
                <div className="timeline-item pending">
                    <div className="timeline-marker"></div>
                    <div className="timeline-content">
                        <h4>CAPA Review</h4>
                        <p>Pending</p>
                    </div>
                </div>
                <div className="timeline-item pending">
                    <div className="timeline-marker"></div>
                    <div className="timeline-content">
                        <h4>Closed</h4>
                        <p>Pending</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ComplaintTimeline;
