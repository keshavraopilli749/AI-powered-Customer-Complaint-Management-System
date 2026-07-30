import React from 'react';
import './Charts.css';

const RiskDistributionChart = () => {
    return (
        <div className="chart-placeholder">
            <h3 className="chart-title">Risk Distribution</h3>
            <div className="chart-mockup donut-chart-mockup">
                {/* Placeholder for pie/donut chart */}
                <div className="donut-circle">
                    <span>High: 15%</span>
                </div>
            </div>
        </div>
    );
};

export default RiskDistributionChart;
