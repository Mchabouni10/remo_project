import React, { useState } from 'react';
import emailjs from '@emailjs/browser';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faPhone, faCheckCircle, faTimesCircle } from '@fortawesome/free-solid-svg-icons';
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
  const [showPopup, setShowPopup] = useState(false);
  const [popupMessage, setPopupMessage] = useState('');
  const [isSuccess, setIsSuccess] = useState(false);

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
      const templateParams = {
        name: formData.name,
        address: formData.address,
        email: formData.email,
        phone: formData.phone,
        message: formData.message,
      };
  
      emailjs.send(
        'service_dd3vt4c', // Replace with your EmailJS Service ID
        'template_bh1msvk', // Replace with your EmailJS Template ID
        templateParams, 
        '1XG9dukbZkFhvw7JT' // Replace with your EmailJS Public Key
      )
      .then((response) => {
        console.log('SUCCESS!', response.status, response.text);
        setPopupMessage('Your message has been sent successfully!');
        setIsSuccess(true);
        setShowPopup(true);
        setFormStatus('Form submitted successfully!');
        setFormData({
          name: '',
          address: '',
          email: '',
          phone: '',
          message: '',
        });

        setTimeout(() => {
          setShowPopup(false);
        }, 3000); // Auto-close after 3 seconds
      })
      .catch((error) => {
        console.error('FAILED...', error);
        setPopupMessage('Failed to send message. Please try again.');
        setIsSuccess(false);
        setShowPopup(true);

        setTimeout(() => {
          setShowPopup(false);
        }, 3000);
      });
    } else {
      setFormStatus('Please fill out all fields correctly.');
    }
  };

  return (
    <div className="contact-form-container">
      <h1 className="contact-heading">Get Your Free Consultation</h1>
      <p className="contact-description">
        Need a new kitchen, bathroom, or basement? We can help! Contact us below to get a free in-home consultation!
      </p>
      {formStatus && <p className="form-status">{formStatus}</p>}

      {/* Popup Message */}
      {showPopup && (
        <div className={`popup-message ${isSuccess ? 'success' : 'error'}`}>
          <FontAwesomeIcon icon={isSuccess ? faCheckCircle : faTimesCircle} className="popup-icon" />
          {popupMessage}
        </div>
      )}

      <div className="contact-content">
        <div className="contact-form">
          <form onSubmit={handleSubmit}>
            <label>
              Name:
              <input type="text" name="name" value={formData.name} onChange={handleChange} required />
              {formErrors.name && <span className="error">{formErrors.name}</span>}
            </label>
            <label>
              Address:
              <input type="text" name="address" value={formData.address} onChange={handleChange} required />
              {formErrors.address && <span className="error">{formErrors.address}</span>}
            </label>
            <label>
              Email:
              <input type="email" name="email" value={formData.email} onChange={handleChange} required />
              {formErrors.email && <span className="error">{formErrors.email}</span>}
            </label>
            <label>
              Phone Number:
              <input type="tel" name="phone" value={formData.phone} onChange={handleChange} required />
              {formErrors.phone && <span className="error">{formErrors.phone}</span>}
            </label>
            <label>
              Message:
              <textarea name="message" value={formData.message} onChange={handleChange} required placeholder="Please enter your message"></textarea>
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







