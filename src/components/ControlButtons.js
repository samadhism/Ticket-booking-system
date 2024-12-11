import React, { useState } from 'react';
import axios from 'axios';

function ControlButtons({ setLogs }) {
    const [intervalId, setIntervalId] = useState(null);
  
    const handleStart = async () => {
      try {
        const response = await axios.post('http://localhost:8080/api/ticket-controller/start');
        alert(response.data);
        console.log('System started:', response.data);
  
        // Start polling logs
        const id = setInterval(async () => {
          try {
            const logResponse = await axios.get('http://localhost:8080/api/ticket-controller/logs');
            setLogs(logResponse.data);
          } catch (error) {
            console.error('Error fetching logs:', error);
            clearInterval(id); // Stop polling on error
          }
        }, 2000); // Poll every 2 seconds
        setIntervalId(id);
      } catch (error) {
        console.error('Error starting the system:', error);
        alert('Failed to start the system. Please try again.');
      }
    };
  
    const handleStop = async () => {
      try {
        const response = await axios.post('http://localhost:8080/api/ticket-controller/stop');
        alert(response.data);
        console.log('System stopped:', response.data);
  
        // Stop polling
        if (intervalId) {
          clearInterval(intervalId);
          setIntervalId(null);
        }
      } catch (error) {
        console.error('Error stopping the system:', error);
        alert('Failed to stop the system. Please try again.');
      }
    };
  
    return (
      <div className="control-buttons">
        <button className="start-btn" onClick={handleStart}>Start</button>
        <button className="stop-btn" onClick={handleStop}>Stop</button>
      </div>
    );
  }
  
  export default ControlButtons;


