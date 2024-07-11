import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import Home from './components/Home';
import Me from './components/Me';
import Resume from './components/Resume';
import Projects from './components/Projects';
import Footer from './components/Footer';
import './App.css';

function App() {
  const [activePage, setActivePage] = useState('home');
  const [isDarkMode, setIsDarkMode] = useState(false);

  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode);
  };

  const renderPage = () => {
    switch (activePage) {
      case 'me':
        return <Me isDarkMode={isDarkMode} />;
      case 'resume':
        return <Resume isDarkMode={isDarkMode} />;
      case 'projects':
        return <Projects isDarkMode={isDarkMode} />;
      default:
        return <Home setActivePage={setActivePage} isDarkMode={isDarkMode} />;
    }
  };

  useEffect(() => {
      // Scroll to the top of the page whenever activePage changes
      window.scrollTo(0, 0);
  }, [activePage]);

  return (
      <div className={`App ${isDarkMode ? 'dark-mode' : 'light-mode'}`}>
        <Header setActivePage={setActivePage} toggleTheme={toggleTheme} isDarkMode={isDarkMode} activePage={activePage} />
        <div className="content">
          {renderPage()}
        </div>
        <Footer isDarkMode={isDarkMode} /> {/* Add the Footer component */}
      </div>
  );
}

export default App;
