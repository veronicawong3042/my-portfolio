import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import SplashPage from './pages/Splash'; 
import { ThemeProvider } from './context/ThemeContext';
import ThemeToggle from './components/ThemeToggle';
import Palette from './components/Palette';
import Header from './components/Header';

function App() {
    const [showSplash, setShowSplash] = useState(true);
    const restBase = 'https://veronica-wong.com/portfolio/wp-json/wp/v2/';

    const handleStart = () => {
        setShowSplash(false);
    };

    console.log('App')
    return (
        <ThemeProvider>
        <Router basename="/">
            {/* <Palette/> */}
            <Header/>
            <main id="main">
                {showSplash ? (
                    <SplashPage onStart={handleStart} />
                ) : (
                    <Routes>
                        <Route path="/" element={<Home restBase={restBase} />} />
                    </Routes>
                )}
            </main>
            {!showSplash && (
                <footer>
                    <p className="copyright">&copy; 2024 Veronica Wong</p>
                    <p>powered by &#127836;, &#127834;, and &#9749;</p>
                </footer>
            )}
        </Router>
        </ThemeProvider>
    );
}

export default App;
