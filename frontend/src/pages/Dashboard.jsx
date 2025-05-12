// src/pages/Dashboard.jsx

import React, { useState, useEffect } from 'react';
import { jwtDecode } from 'jwt-decode';
import { motion } from 'framer-motion';
import ProfileDropdown from '../components/ProfileDropdown';
import '../styles/main.css';

function Dashboard() {
    const [userName, setUserName] = useState('');

    useEffect(() => {
        const token = localStorage.getItem('token');
        if (token) {
            const decoded = jwtDecode(token);
            setUserName(decoded.firstName);
        }
    }, []);

    const [subscriptions, setSubscriptions] = useState([
        { name: 'Netflix', cost: 15, renewal: '2 days' },
        { name: 'Spotify', cost: 10, renewal: '5 days' },
        { name: 'Adobe Creative Cloud', cost: 50, renewal: '10 days' },
    ]);

    return (
        <div className="dashboard-container">
            <nav className="dashboard-navbar">
                <h1 className="dashboard-title">Renewly</h1>
                <ProfileDropdown />
            </nav>
            <motion.div 
                className="dashboard-welcome" 
                initial={{ opacity: 0, y: -50 }} 
                animate={{ opacity: 1, y: 0 }} 
                transition={{ duration: 0.6 }}
            >
                <h2>Welcome back, {userName}!</h2>
                <p>Your total monthly spending: $250</p>
            </motion.div>
            <motion.div 
                className="dashboard-overview" 
                initial={{ opacity: 0, y: 50 }} 
                animate={{ opacity: 1, y: 0 }} 
                transition={{ duration: 0.8 }}
            >
                <h3>Upcoming Renewals</h3>
                <ul>
                    {subscriptions.map((sub, index) => (
                        <li key={index} className="subscription-item">
                            <span>{sub.name}</span>
                            <span>${sub.cost}</span>
                            <span>Renews in {sub.renewal}</span>
                        </li>
                    ))}
                </ul>
            </motion.div>
        </div>
    );
}

export default Dashboard;
