import React, { useState } from 'react';
import axios from 'axios';

function SetForm() {
  const [vendorCount, setVendorCount] = useState('');
  const [customerCount, setCustomerCount] = useState('');

  const handleVendorChange = (e) => {
    setVendorCount(e.target.value);
  };

  const handleCustomerChange = (e) => {
    setCustomerCount(e.target.value);
  };

  const handleSetVendors = async () => {
    try {
      const response = await axios.post(
        `http://localhost:8080/api/ticket-controller/set-vendors?vendorCount=${vendorCount}`,
        null,
        {
          params: { vendorCount: vendorCount },
        }
      );
      alert(response.data);
    } catch (error) {
      console.error('Error setting vendor count:', error);
      alert('Failed to set vendor count. Please try again.');
    }
  };

  const handleSetCustomers = async () => {
    try {
      const response = await axios.post(
        `http://localhost:8080/api/ticket-controller/set-customers?customerCount=${customerCount}`,
        null,
        {
          params: { customerCount: customerCount },
        }
      );
      alert(response.data);
    } catch (error) {
      console.error('Error setting customer count:', error);
      alert('Failed to set customer count. Please try again.');
    }
  };

  return (
    <div className="set-form">
      <div className="set-vendors">
        <label>
          Set Vendors:
          <input
            type="number"
            placeholder="Enter vendor count"
            value={vendorCount}
            onChange={handleVendorChange}
          />
        </label>
        <button className="set-btn" onClick={handleSetVendors}>
          Set
        </button>
      </div>

      <div className="set-customers">
        <label>
          Set Customers:
          <input
            type="number"
            placeholder="Enter customer count"
            value={customerCount}
            onChange={handleCustomerChange}
          />
        </label>
        <button className="set-btn" onClick={handleSetCustomers}>
          Set
        </button>
      </div>
    </div>
  );
}

export default SetForm;


