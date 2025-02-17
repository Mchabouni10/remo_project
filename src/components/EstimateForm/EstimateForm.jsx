import React from 'react';
import emailjs from '@emailjs/browser';
import './EstimateForm.css';

const EstimateForm = ({ show, handleClose }) => {
  const handleSubmit = (event) => {
    event.preventDefault();

    const formData = {
      name: event.target.name.value,
      address: event.target.address.value,
      email: event.target.email.value,
      phone: event.target.phone.value,
      message: event.target.message.value,
      referredBy: event.target.referredBy.value, // Add referredBy field
    };

    emailjs.send(
      'service_dd3vt4c', // Replace with your EmailJS Service ID
      'template_bh1msvk', // Replace with your EmailJS Template ID
      formData,
      '1XG9dukbZkFhvw7JT' // Replace with your EmailJS Public Key
    )
    .then((response) => {
      console.log('SUCCESS!', response.status, response.text);
      alert('Estimate request sent successfully!');
      handleClose();
    })
    .catch((error) => {
      console.error('FAILED...', error);
      alert('Failed to send message.');
    });
  };

  return (
    <div className={`modal ${show ? 'display-block' : 'display-none'}`}>
      <div className="modal-content">
        <span className="close-button" onClick={handleClose}>&times;</span>
        <h2 className="estimate-heading">Free Estimate Request</h2>
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
            <textarea name="message" required placeholder="Enter your message"></textarea>
          </label>
          <label>
            Referred By:
            <input type="text" name="referredBy" placeholder="Optional" />
          </label>
          <button type="submit">Submit</button>
        </form>
      </div>
    </div>
  );
};

export default EstimateForm;



