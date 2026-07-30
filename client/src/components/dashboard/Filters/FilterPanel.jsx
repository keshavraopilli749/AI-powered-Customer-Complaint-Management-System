import React from 'react';
import './FilterPanel.css';

const FilterPanel = () => {
    return (
        <div className="filter-panel">
            <div className="filter-group">
                <label>Status</label>
                <select className="filter-select">
                    <option>All Statuses</option>
                    <option>Open</option>
                    <option>Closed</option>
                    <option>Pending Review</option>
                </select>
            </div>
            
            <div className="filter-group">
                <label>Risk Level</label>
                <select className="filter-select">
                    <option>All Risks</option>
                    <option>Critical</option>
                    <option>High</option>
                    <option>Medium</option>
                    <option>Low</option>
                </select>
            </div>
            
            <div className="filter-group">
                <label>Timeframe</label>
                <select className="filter-select">
                    <option>Last 30 Days</option>
                    <option>Last Quarter</option>
                    <option>Year to Date</option>
                </select>
            </div>
            
            <button className="btn-filter-reset">Reset</button>
        </div>
    );
};

export default FilterPanel;
