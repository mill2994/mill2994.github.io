import React from 'react';
import './Footer.css';

function Footer({ isDarkMode }) {
    return (
        <footer className={`footer ${isDarkMode ? 'dark-mode' : 'light-mode'}`}>
            <p>&copy; 2024 Ben Miller</p>
        </footer>
    );
}

export default Footer;