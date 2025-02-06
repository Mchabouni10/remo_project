import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faPhone } from '@fortawesome/free-solid-svg-icons'; // Import the icons
import './Contact.css';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    address: '',
    email: '',
    phone: '',
    message: '',
  });

  const [formErrors, setFormErrors] = useState({});
  const [formStatus, setFormStatus] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const validateForm = () => {
    const errors = {};
    if (!formData.name) errors.name = 'Name is required';
    if (!formData.address) errors.address = 'Address is required';
    if (!formData.email) errors.email = 'Email is required';
    if (!formData.phone) errors.phone = 'Phone number is required';
    if (!formData.message) errors.message = 'Message is required';
    setFormErrors(errors);
    return Object.keys(errors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      // Process form data here
      // For example, send it to your business Gmail using an API
      setFormStatus('Form submitted successfully!');
      setFormData({
        name: '',
        address: '',
        email: '',
        phone: '',
        message: '',
      });
    } else {
      setFormStatus('Please fill out all fields.');
    }
  };

  return (
    <div className="contact-form-container">
      <h1 className="contact-heading">Get Your Free Consultation</h1>
      <p className="contact-description">Need a new kitchen, bathroom, or basement? We can help! Contact us below to get a free in-home consultation!</p>
      {formStatus && <p className="form-status">{formStatus}</p>}
      <div className="contact-content">
        <div className="contact-form">
          <form onSubmit={handleSubmit}>
            <label>
              Name:
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
              />
              {formErrors.name && <span className="error">{formErrors.name}</span>}
            </label>
            <label>
              Address:
              <input
                type="text"
                name="address"
                value={formData.address}
                onChange={handleChange}
                required
              />
              {formErrors.address && <span className="error">{formErrors.address}</span>}
            </label>
            <label>
              Email:
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
              />
              {formErrors.email && <span className="error">{formErrors.email}</span>}
            </label>
            <label>
              Phone Number:
              <input
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                required
              />
              {formErrors.phone && <span className="error">{formErrors.phone}</span>}
            </label>
            <label>
              Message:
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                minLength="300"
                placeholder="Please write at least 300 characters"
              />
              {formErrors.message && <span className="error">{formErrors.message}</span>}
            </label>
            <button type="submit">REQUEST CONSULTATION</button>
          </form>
        </div>
        <div className="contact-info">
          <h2 className="contact-info-heading">Contact Information</h2>
          <p className="contact-info-text">
            <FontAwesomeIcon icon={faEnvelope} style={{ color: 'black' }} /> Email: rawdahremodeling@gmail.com
          </p>
          <p className="contact-info-text">
            <FontAwesomeIcon icon={faPhone} style={{ color: 'black' }} /> Phone: (224) 817-3264
          </p>
        </div>
      </div>
    </div>
  );
};

export default Contact;




