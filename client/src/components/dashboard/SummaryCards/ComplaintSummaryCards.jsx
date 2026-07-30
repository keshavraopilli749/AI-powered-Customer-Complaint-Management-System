import React from 'react';
import './ComplaintSummaryCards.css';

const summaryData = [
    { title: 'Total Complaints', value: '1,248', trend: '+12%', type: 'neutral' },
    { title: 'Open Investigations', value: '342', trend: '-5%', type: 'positive' },
    { title: 'High Risk', value: '28', trend: '+2%', type: 'negative' },
    { title: 'Pending Approval', value: '15', trend: '0%', type: 'neutral' },
];

const ComplaintSummaryCards = () => {
    return (
        <div className="summary-cards-container">
            {summaryData.map((data, idx) => (
                <div key={idx} className="summary-card">
                    <div className="card-header">
                        <span className="card-title">{data.title}</span>
                    </div>
                    <div className="card-body">
                        <h2 className="card-value">{data.value}</h2>
                        <span className={`card-trend trend-${data.type}`}>
                            {data.trend} from last month
                        </span>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default ComplaintSummaryCards;
