import React from 'react';
import './RecentActivity.css';

const activities = [
    { id: 1, action: 'Complaint CMP-2026-0001 Created', user: 'System via Email', time: '10 mins ago' },
    { id: 2, action: 'AI Risk Assessment Completed', user: 'AI Copilot', time: '1 hour ago' },
    { id: 3, action: 'Investigation Assigned', user: 'Jane Doe (QA Manager)', time: '3 hours ago' },
    { id: 4, action: 'CAPA Approved', user: 'John Smith (Director)', time: '1 day ago' },
];

const RecentActivity = () => {
    return (
        <div className="activity-container">
            <h3 className="section-title">Recent Activity</h3>
            <ul className="activity-list">
                {activities.map(act => (
                    <li key={act.id} className="activity-item">
                        <div className="activity-avatar">{act.user.charAt(0)}</div>
                        <div className="activity-details">
                            <p className="activity-action">{act.action}</p>
                            <p className="activity-meta">{act.user} • {act.time}</p>
                        </div>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default RecentActivity;
