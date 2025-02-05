// EstimateForm.js
import React from 'react';
import './EstimateForm.css';

const EstimateForm = ({ show, handleClose }) => {
  const handleSubmit = (event) => {
    event.preventDefault();
    // Process form data here
    handleClose();
  };

  return (
    <div className={`modal ${show ? 'display-block' : 'display-none'}`}>
      <div className="modal-content">
        <span className="close-button" onClick={handleClose}>&times;</span>
        <h2 className="estimate-heading">Free Estimate request</h2>
        <form onSubmit={handleSubmit}>
          <label>
            Name:
            <input type="text" name="name" required />
          </label>
          <label>
            Address:
            <input type="text" name="address" required />
          </label>
          <label>
            Email:
            <input type="email" name="email" required />
          </label>
          <label>
            Phone Number:
            <input type="tel" name="phone" required />
          </label>
          <label>
           Message:
          <textarea name="message" required minLength="300" placeholder="Please write at least 300 characters"></textarea>
          </label>
          <button type="submit">Submit</button>
        </form>
      </div>
    </div>
  );
};

export default EstimateForm;

