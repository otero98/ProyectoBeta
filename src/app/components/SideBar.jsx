import React, { useState } from 'react'
import '../styles/sidebar.css'
export const SideBar = ({ isOpen, toggleSidebar }) => {
    // Estado para controlar qué menú está expandido
    const [expandedMenu, setExpandedMenu] = useState(null);


    const handleToggleSubMenu = (menuName) => {
        //alterna el sumenú abierto 

        setExpandedMenu(expandedMenu === menuName ? null : menuName);
    }

    return (
        <div className={`sidebar ${isOpen ? 'open' : 'closed'}`}>
            <button className="close-btn" onClick={toggleSidebar}>
                &times;
            </button>
            <h2>Navigation</h2>
            <ul>
                <li>
                    <a href="#home">Home</a>
                </li>
                <li>
                    <a href="#about">About</a>
                </li>

                {/* Menú con subniveles */}
                <li>
                    <button
                        className="submenu-toggle"
                        onClick={() => handleToggleSubMenu('services')}
                        aria-expanded={expandedMenu === 'services'}
                    >
                        Services
                        <span className={`arrow ${expandedMenu === 'services' ? 'rotate' : ''}`}>&#9662;</span>
                    </button>
                    {expandedMenu === 'services' && (
                        <ul className="submenu">
                            <li><a href="#web-design">Web Design</a></li>
                            <li><a href="#seo">SEO</a></li>
                            <li><a href="#marketing">Marketing</a></li>
                        </ul>
                    )}
                </li>

                {/* Otro menú con subniveles */}
                <li>
                    <button
                        className="submenu-toggle"
                        onClick={() => handleToggleSubMenu('contact')}
                        aria-expanded={expandedMenu === 'contact'}
                    >
                        Contact
                        <span className={`arrow ${expandedMenu === 'contact' ? 'rotate' : ''}`}>&#9662;</span>
                    </button>
                    {expandedMenu === 'contact' && (
                        <ul className="submenu">
                            <li><a href="#email">Email</a></li>
                            <li><a href="#phone">Phone</a></li>
                            <li><a href="#location">Location</a></li>
                        </ul>
                    )}
                </li>
            </ul>
        </div>
    );
};
