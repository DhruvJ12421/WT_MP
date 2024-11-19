// src/components/FollowUs.js

import React from 'react';

const FollowUs = () => {
    return (
        <div style={{ padding: '50px', textAlign: 'center' }}>
            <h1>Follow Us</h1>
            <p>Stay connected and follow us on our social media channels:</p>
            <div style={{ fontSize: '30px' }}>
                <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer" style={{ margin: '0 20px' }}>
                    <i className="fab fa-facebook"></i> Facebook
                </a>
                <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer" style={{ margin: '0 20px' }}>
                    <i className="fab fa-instagram"></i> Instagram
                </a>
                <a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer" style={{ margin: '0 20px' }}>
                    <i className="fab fa-twitter"></i> Twitter
                </a>
                <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer" style={{ margin: '0 20px' }}>
                    <i className="fab fa-linkedin"></i> LinkedIn
                </a>
            </div>
            <p>Follow us to get the latest updates, offers, and news!</p>
        </div>
    );
};

export default FollowUs;
