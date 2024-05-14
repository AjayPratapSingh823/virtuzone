import React, { useState } from 'react';
import './Form.css'; // Assuming you have a CSS file for styling
import axios from 'axios';

function Form() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phoneNumber: '',
    nationality: '',
    message: ''
  });
  
  const [submitMessage, setSubmitMessage] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = async(e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:3001/form/form-submit', formData);
      setSubmitMessage('Form submitted successfully,We will contact you soon');
      setFormData({
        firstName: '',
        lastName: '',
        email: '',
        phoneNumber: '',
        nationality: '',
        message: ''
      });
    } catch(err) {
      console.log(err);
    }
  };

  return (
    <div className="form-container">
      <div className="card">
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <h1>Contact Us</h1>
            <div className="inline-group">
              <div className="form-item">
                <label htmlFor="firstName">First Name <span>(Required)</span></label>
                <input type="text" placeholder='Type your FirstName.....' id="firstName" name="firstName" value={formData.firstName} onChange={handleChange} required />
              </div>
              <div className="form-item">
                <label htmlFor="lastName">Last Name <span>(Required)</span></label>
                <input type="text"  placeholder='Type your LastName.....' id="lastName" name="lastName" value={formData.lastName} onChange={handleChange} required />
              </div>
            </div>
          </div>
          <div className="form-group">
            <div className="inline-group">
              <div className="form-item">
                <label htmlFor="email">Email <span>(Required)</span></label>
                <input type="email" placeholder='Enter your email...' id="email" name="email" value={formData.email} onChange={handleChange} required />
              </div>
              <div className="form-item">
                <label htmlFor="phone">Phone <span>(Required)</span></label>
                <input type="tel" id="phone" placeholder='Enter your contact...' name="phoneNumber" value={formData.phoneNumber} onChange={handleChange} required />
              </div>
            </div>
          </div>
          <div className="form-group">
            <div className="inline-group">
              <div className="form-item">
                <label htmlFor="nationality">Nationality <span>(Required)</span></label>
                <select id="nationality" name="nationality" value={formData.nationality} onChange={handleChange} required>
                  <option value="">Select</option>
                  <option value="us">United States</option>
                  <option value="uk">United Kingdom</option>
                  <option value="ca">Canada</option>
                  <option value="other">Other</option>
                </select>
              </div>
              <div className="form-item">
                <label htmlFor="message">How can we help you? <span>(Required)</span></label>
                <textarea id="message" name="message" value={formData.message} onChange={handleChange} required></textarea>
              </div>
            </div>
          </div>
          <div className='form-group'>
            <button type="submit">Submit</button>
          </div>
          {submitMessage && <p>{submitMessage}</p>}
        </form>
      </div>
    </div>
  );
}

export default Form;
