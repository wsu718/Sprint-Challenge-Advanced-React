import React from 'react';
import { useDarkMode } from '../hooks/useDarkMode';


const Navbar = () => {
    const [darkMode, setDarkMode] = useDarkMode(false);

    const toggleMode = e => {
        e.preventDefault();
        setDarkMode(!darkMode);
    };

    return (
        <nav className="navbar">
            <h1>Soccer Star Searches</h1>
            <div>Dark mode:</div>
            <div className="dark-mode__toggle">

                <div
                    onClick={toggleMode}
                    className={darkMode ? 'toggle toggled' : 'toggle'}
                />
            </div>
        </nav>
    );
};

export default Navbar;
