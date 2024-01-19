import React from 'react';

export default function Home() {
  const containerStyle = {
    height: '100vh',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'flex-start',
    alignItems: 'center',
    backgroundColor: '#f0f2f5', 
    fontFamily: '"Segoe UI", Arial, sans-serif',
    paddingTop: '20px',
  };

  const titleStyle = {
    fontSize: '2.5rem',
    fontWeight: 'bold',
    color: '#1e90ff', 
    textShadow: '1px 1px 2px rgba(0, 0, 0, 0.1)',
  };

  return (
    <div style={containerStyle}>
      <h1 style={titleStyle}>School Administration System</h1>
    </div>
  );
}