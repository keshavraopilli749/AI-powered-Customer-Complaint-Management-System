import React from 'react';
import './ExportPanel.css';

const ExportPanel = () => {
    return (
        <div className="export-panel">
            <button className="btn-export csv">Export CSV</button>
            <button className="btn-export pdf">Export PDF</button>
        </div>
    );
};

export default ExportPanel;
