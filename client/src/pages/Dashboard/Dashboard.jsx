import React from 'react';
import ComplaintSummaryCards from '../../components/dashboard/SummaryCards/ComplaintSummaryCards';
import ComplaintTrendChart from '../../components/dashboard/Charts/ComplaintTrendChart';
import RiskDistributionChart from '../../components/dashboard/Charts/RiskDistributionChart';
import StatusChart from '../../components/dashboard/Charts/StatusChart';
import ComplaintTable from '../../components/dashboard/Tables/ComplaintTable';
import FilterPanel from '../../components/dashboard/Filters/FilterPanel';
import SearchBar from '../../components/dashboard/Search/SearchBar';
import ComplaintTimeline from '../../components/dashboard/Timeline/ComplaintTimeline';
import RecentActivity from '../../components/dashboard/Activity/RecentActivity';
import ExportPanel from '../../components/dashboard/Reports/ExportPanel';
import './Dashboard.css';

const Dashboard = () => {
    return (
        <div className="dashboard-layout">
            <header className="dashboard-header">
                <div>
                    <h1 className="dashboard-title">Quality Assurance Dashboard</h1>
                    <p className="dashboard-subtitle">Monitor and manage pharmaceutical customer complaints</p>
                </div>
                <ExportPanel />
            </header>

            <ComplaintSummaryCards />

            <div className="dashboard-controls">
                <SearchBar />
                <FilterPanel />
            </div>

            <div className="dashboard-charts-grid">
                <ComplaintTrendChart />
                <RiskDistributionChart />
                <StatusChart />
            </div>

            <div className="dashboard-bottom-grid">
                <div className="table-section">
                    <div className="section-header">
                        <h2>Recent Complaints</h2>
                    </div>
                    <ComplaintTable />
                </div>
                <div className="sidebar-section">
                    <ComplaintTimeline />
                    <div style={{ marginTop: '1.5rem' }}>
                        <RecentActivity />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Dashboard;
