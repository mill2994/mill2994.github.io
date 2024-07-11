import React from 'react';
import './Header.css';
import dayImage from './icons/day.png';  // Adjust the path as necessary
import nightImage from './icons/night.png';  // Adjust the path as necessary Moon Symbol icon by Icons8

function Header({ setActivePage, toggleTheme, isDarkMode, activePage }) {
    return (
        <header className={`header ${isDarkMode ? 'dark-mode' : 'light-mode'}`}>
            <div className={`logo ${activePage === 'home' ? 'active' : ''}`} onClick={() => setActivePage('home')}>Ben Miller</div>
            <nav className="nav-menu">
                <ul>
                    <li className={activePage === 'me' ? 'active' : ''} onClick={() => setActivePage('me')}>Me!</li>
                    <li className="divider">|</li>
                    <li className={activePage === 'projects' ? 'active' : ''} onClick={() => setActivePage('projects')}>Projects</li>
                    <li className="divider">|</li>
                    <li className={activePage === 'resume' ? 'active' : ''} onClick={() => setActivePage('resume')}>Resume</li>
                    <li className="divider">|</li>
                    <li className="button">
                        <button className="theme-toggle-button" onClick={toggleTheme}>
                            <img
                                src={isDarkMode ? dayImage : nightImage}
                                alt={isDarkMode ? 'Day Mode' : 'Night Mode'}
                                width="25" // Adjust size as necessary
                                height="25" // Adjust size as necessary
                            />
                        </button>
                    </li>
                </ul>
            </nav>
        </header>
    );
}

export default Header;
