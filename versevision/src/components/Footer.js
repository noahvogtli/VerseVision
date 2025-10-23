import React from 'react';
import './Footer.css';


const Footer = () => {
    return (
        <div className='footer-flex'>
            <p>Copyright © 2025 VerseVision. All rights reserved.</p>
            <div className='footer-links'>
                <a>Private Policy</a>
                <a>About</a>
                <a>Contact</a>
            </div>
        </div>
    );
};

export default Footer;