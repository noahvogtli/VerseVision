import React from 'react';
import '../styling/Footer.css';
import { useLocation, useNavigate } from 'react-router-dom';


const Footer = () => {

    const navigate = useNavigate();
    const handleNavigation = (path) => {
        navigate(path);
        window.scrollTo(0, 0); 
      };


    return (
        <div className='footer'>
            
            <div className='footer-flex'>
                <p>Copyright © 2025 VerseVision. All rights reserved.</p>
                <div className='footer-links'>
                    <a onClick={() => handleNavigation("/policy")}>Private Policy</a>
                    <a onClick={() => handleNavigation("/about")}>About</a>
                    <a>Contact</a>
                </div>
            </div>
        </div>
    );
};

export default Footer;