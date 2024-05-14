import React, { useState } from 'react';
import './Form2.css'; // Assuming you have a CSS file for styling

function App2() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    nationality: '',
    message: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // You can handle form submission here, e.g., send data to backend
    console.log(formData);
  };

  return (
    <div className="form-2">
      <div className="card-2">
        <form onSubmit={handleSubmit}>
          <div className="form-group-2">
            <h1>Contact Us</h1>
            <div className="form-item-2">
              <label htmlFor="firstName">First Name <span>(Required)</span></label>
              <input type="text" id="firstName" name="firstName" value={formData.firstName} onChange={handleChange} required />
            </div>
            <div className="form-item-2">
              <label htmlFor="lastName">Last Name <span>(Required)</span></label>
              <input type="text" id="lastName" name="lastName" value={formData.lastName} onChange={handleChange} required />
            </div>
            <div className="form-item-2">
              <label htmlFor="email">Email <span>(Required)</span></label>
              <input type="email" id="email" name="email" value={formData.email} onChange={handleChange} required />
            </div>
            <div className="form-item-2">
              <label htmlFor="phone">Phone <span>(Required)</span></label>
              <input type="tel" id="phone" name="phone" value={formData.phone} onChange={handleChange} required />
            </div>
            <div className="form-item-2">
              <label htmlFor="nationality">Nationality <span>(Required)</span></label>
              <select id="nationality" name="nationality" value={formData.nationality} onChange={handleChange} required>
                <option value="">Select</option>
                <option value="us">United States</option>
                <option value="uk">United Kingdom</option>
                <option value="ca">Canada</option>
                <option value="other">Other</option>
              </select>
            </div>
            <div className="form-item-2">
              <label htmlFor="message">How can we help you? <span>(Required)</span></label>
              <textarea id="message" name="message" value={formData.message} onChange={handleChange} required></textarea>
            </div>
          </div>
          <div className="form-group-2">
            <button type="submit">Submit</button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default App2;
