import React, { useState } from 'react';
import axios from 'axios';

function ConfigurationForm() {
  const [formData, setFormData] = useState({
    totalTickets: '',
    ticketReleaseRate: '',
    customerRetrievalRate: '',
    maxTicketCapacity: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async () => {
    try {
      const response = await axios.post(
        'http://localhost:8080/api/ticket-controller/configuration',
        null, // No body data since we're sending params in URL
        {
          params: {
            totalTickets: formData.totalTickets,
            ticketReleaseRate: formData.ticketReleaseRate,
            customerRetrievalRate: formData.customerRetrievalRate,
            maxTicketCapacity: formData.maxTicketCapacity,
          },
        }
      );
      alert(response.data); // Notify user of the success message
    } catch (error) {
      console.error('Error configuring the system:', error);
      alert('Failed to configure the system. Please try again.');
    }
  };

  return (
    <div className="configuration-form">
  <label>
    Enter Total Tickets:
    <input
      type="number"
      name="totalTickets"
      placeholder="Total Tickets"
      value={formData.totalTickets}
      onChange={handleChange}
      min="0"
      step="1"
    />
  </label>
  <label>
    Enter Ticket Release Rate:
    <input
      type="number"
      name="ticketReleaseRate"
      placeholder="Release Rate"
      value={formData.ticketReleaseRate}
      onChange={handleChange}
      min="0"
      step="1"
    />
  </label>
  <label>
    Enter Customer Retrieval Rate:
    <input
      type="number"
      name="customerRetrievalRate"
      placeholder="Retrieval Rate"
      value={formData.customerRetrievalRate}
      onChange={handleChange}
      min="0"
      step="1"
    />
  </label>
  <label>
    Enter Max Ticket Capacity:
    <input
      type="number"
      name="maxTicketCapacity"
      placeholder="Max Capacity"
      value={formData.maxTicketCapacity}
      onChange={handleChange}
      min="0"
      step="1"
    />
  </label>

  <div className="config-buttons">
    <button className="config-btn" onClick={handleSubmit}>
      Configure
    </button>
  </div>
</div>

  );
}

export default ConfigurationForm;

