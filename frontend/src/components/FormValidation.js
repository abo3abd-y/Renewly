// src/components/FormValidation.js

import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import api from '../utils/api';
import '../styles/main.css';

function FormValidation() {
    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        email: '',
        password: '',
        confirmPassword: '',
        birthday: ''
    });
    const [errors, setErrors] = useState({});
    const navigate = useNavigate();

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
        setErrors({ ...errors, [name]: '' }); // Clear the error as user types
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        // Check for empty fields
        const newErrors = {};
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
            await api.post('/auth/register', formData);
            navigate('/login');
        } catch (error) {
            console.error(error);
            setErrors({ email: 'Email already in use or invalid' });
        }
    };

    return (
        <form className="form-container" onSubmit={handleSubmit}>
            {Object.keys(errors).length > 0 && (
                <div className="error-message">Please fill out all required fields correctly</div>
            )}
            {Object.keys(formData).map((field, index) => (
                <div key={index} className={`form-group ${errors[field] ? 'error' : ''}`}>
                    <input
                        type={field === 'password' || field === 'confirmPassword' ? 'password' : 'text'}
                        name={field}
                        placeholder={field.replace(/([A-Z])/g, ' $1')}
                        value={formData[field]}
                        onChange={handleChange}
                    />
                    {errors[field] && <span className="error-text">{errors[field]}</span>}
                </div>
            ))}
            <button type="submit" className="submit-button">Register</button>
        </form>
    );
}

export default FormValidation;
