import React from 'react';

function LogDisplay({ logs }) {
  return (
    <div className="log-display">
      <h2>Log Display</h2>
      <textarea rows="10" readOnly value={logs.join('\n')} />
    </div>
  );
}

export default LogDisplay;
