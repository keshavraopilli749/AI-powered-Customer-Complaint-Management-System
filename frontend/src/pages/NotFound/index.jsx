import React from 'react';
import { Link } from 'react-router-dom';

const NotFound = () => {
  return (
    <div className="page-container flex-center" style={{ height: '100vh', flexDirection: 'column' }}>
      <h1>404</h1>
      <p>Page Not Found</p>
      <Link to="/" style={{ marginTop: '1rem' }}>Go to Dashboard</Link>
    </div>
  );
};

export default NotFound;
