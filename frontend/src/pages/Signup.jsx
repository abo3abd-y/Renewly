// src/pages/Signup.jsx

import React, { useState } from 'react';
import api from '../utils/api';
import '../styles/main.css';
import { useNavigate } from 'react-router-dom';

function Signup() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    confirmPassword: '',
    birthday: ''
  });
  const [errors, setErrors] = useState({});
  const [generalError, setGeneralError] = useState('');
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
    setErrors({ ...errors, [name]: '' });
    setGeneralError('');
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Clear previous errors
    const newErrors = {};

    // Check for missing fields
    Object.keys(formData).forEach((key) => {
      if (!formData[key]) {
        newErrors[key] = `${key.replace(/([A-Z])/g, ' $1')} is required`;
      }
    });

    // Check for password mismatch
    if (formData.password !== formData.confirmPassword) {
      newErrors.confirmPassword = 'Passwords do not match';
    }

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    try {
      const response = await api.post('/auth/register', formData);
      navigate('/login');
    } catch (error) {
      console.error(error);
      setGeneralError('Email already in use or invalid');
    }
  };

  return (
    <div className="signup-container">
      <h1>Create Your Renewly Account</h1>
      {generalError && <div className="general-error">{generalError}</div>}
      <form onSubmit={handleSubmit}>
        <div className={`form-group ${errors.firstName ? 'error' : ''}`}>
          <input
            type="text"
            name="firstName"
            placeholder="First Name"
            value={formData.firstName}
            onChange={handleChange}
            required
          />
          {errors.firstName && <span className="error-text">{errors.firstName}</span>}
        </div>

        <div className={`form-group ${errors.lastName ? 'error' : ''}`}>
          <input
            type="text"
            name="lastName"
            placeholder="Last Name"
            value={formData.lastName}
            onChange={handleChange}
            required
          />
          {errors.lastName && <span className="error-text">{errors.lastName}</span>}
        </div>

        <div className={`form-group ${errors.email ? 'error' : ''}`}>
          <input
            type="email"
            name="email"
            placeholder="Email Address"
            value={formData.email}
            onChange={handleChange}
            required
          />
          {errors.email && <span className="error-text">{errors.email}</span>}
        </div>

        <div className={`form-group ${errors.password ? 'error' : ''}`}>
          <input
            type="password"
            name="password"
            placeholder="Password"
            value={formData.password}
            onChange={handleChange}
            required
          />
          {errors.password && <span className="error-text">{errors.password}</span>}
        </div>

        <div className={`form-group ${errors.confirmPassword ? 'error' : ''}`}>
          <input
            type="password"
            name="confirmPassword"
            placeholder="Re-enter Password"
            value={formData.confirmPassword}
            onChange={handleChange}
            required
          />
          {errors.confirmPassword && <span className="error-text">{errors.confirmPassword}</span>}
        </div>

        <div className={`form-group ${errors.birthday ? 'error' : ''}`}>
          <input
            type="date"
            name="birthday"
            placeholder="Birthday"
            value={formData.birthday}
            onChange={handleChange}
            required
          />
          {errors.birthday && <span className="error-text">{errors.birthday}</span>}
        </div>

        <button type="submit">Sign Up</button>
      </form>
      <p>
        Already have an account? <a href="/login">Log In</a>
      </p>
    </div>
  );
}

export default Signup;
