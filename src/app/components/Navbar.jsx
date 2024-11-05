import React from 'react';

import '../styles/Navbar.css'

export const Navbar = ({ toggleSidebar }) => {
    return (
        <nav className="navbar">
            <button className="menu-icon" onClick={toggleSidebar}>
                &#9776; {/* Icono de menú (hamburguesa) */}
            </button>
            <h1>My Application</h1>
            <div className="navbar-links">
                <a href="#home">Home</a>
                <a href="#about">About</a>
                <a href="#services">Services</a>
                <a href="#contact">Contact</a>
            </div>
        </nav>
    );
};