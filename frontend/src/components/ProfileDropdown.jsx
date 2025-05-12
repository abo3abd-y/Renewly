import React, { useState } from 'react';
import { motion } from 'framer-motion';
import '../styles/main.css';

function ProfileDropdown() {
    const [isOpen, setIsOpen] = useState(false);

    const toggleDropdown = () => {
        setIsOpen(!isOpen);
    };

    const handleLogout = () => {
        localStorage.removeItem('token');
        window.location.href = '/login';
    };

    return (
        <div className="profile-dropdown-container">
            <div className="profile-icon" onClick={toggleDropdown}>
                <img src="/profile-icon.png" alt="Profile" />
            </div>
            {isOpen && (
                <motion.div 
                    className="profile-dropdown" 
                    initial={{ opacity: 0, y: -10 }} 
                    animate={{ opacity: 1, y: 0 }} 
                    transition={{ duration: 0.3 }}
                >
                    <button className="dropdown-item">User Settings</button>
                    <button className="dropdown-item logout" onClick={handleLogout}>Logout</button>
                </motion.div>
            )}
        </div>
    );
}

export default ProfileDropdown;
