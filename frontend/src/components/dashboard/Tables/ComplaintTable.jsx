import React from 'react';
import './ComplaintTable.css';

// Mock Data
const mockComplaints = [
    { id: 'CMP-2026-0001', product: 'Aspirin 50mg', batch: 'B-123', status: 'Open', risk: 'Medium', date: '2026-07-29' },
    { id: 'CMP-2026-0002', product: 'Ibuprofen 200mg', batch: 'B-456', status: 'Closed', risk: 'Low', date: '2026-07-28' },
    { id: 'CMP-2026-0003', product: 'Lisinopril 10mg', batch: 'L-789', status: 'Investigation', risk: 'High', date: '2026-07-27' },
];

const ComplaintTable = () => {
    return (
        <div className="table-container">
            <table className="enterprise-table">
                <thead>
                    <tr>
                        <th>Complaint No.</th>
                        <th>Product</th>
                        <th>Batch</th>
                        <th>Date</th>
                        <th>Risk</th>
                        <th>Status</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {mockComplaints.map(row => (
                        <tr key={row.id}>
                            <td className="font-medium text-blue-600">{row.id}</td>
                            <td>{row.product}</td>
                            <td>{row.batch}</td>
                            <td>{row.date}</td>
                            <td>
                                <span className={`badge risk-${row.risk.toLowerCase()}`}>
                                    {row.risk}
                                </span>
                            </td>
                            <td>
                                <span className={`badge status-${row.status.toLowerCase()}`}>
                                    {row.status}
                                </span>
                            </td>
                            <td>
                                <button className="btn-action">View</button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
            
            <div className="table-pagination">
                <span>Showing 1 to 3 of 1,248 entries</span>
                <div className="pagination-controls">
                    <button disabled>Previous</button>
                    <button className="active">1</button>
                    <button>2</button>
                    <button>3</button>
                    <button>Next</button>
                </div>
            </div>
        </div>
    );
};

export default ComplaintTable;
