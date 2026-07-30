import React from 'react';
import './Charts.css';

const StatusChart = () => {
    return (
        <div className="chart-placeholder">
            <h3 className="chart-title">Investigation Status</h3>
            <div className="chart-mockup bar-chart-mockup">
                {/* Placeholder for horizontal bar chart */}
                <div className="horizontal-bar"><div className="fill" style={{width: '80%'}}></div></div>
                <div className="horizontal-bar"><div className="fill" style={{width: '45%'}}></div></div>
                <div className="horizontal-bar"><div className="fill" style={{width: '20%'}}></div></div>
            </div>
        </div>
    );
};

export default StatusChart;
