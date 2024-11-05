import React, { useState } from 'react'
import { SideBar, Navbar } from '../components'
import '../styles/HomePage.css'

export const HomePage = () => {

    const [isSidebarOpen, setIsSidebarOpen] = useState(false);

    const toggleSidebar = () => {
        setIsSidebarOpen(!isSidebarOpen);
    };

    return (
        <div className="app">
            <Navbar toggleSidebar={toggleSidebar} />
            <SideBar isOpen={isSidebarOpen} toggleSidebar={toggleSidebar} />
            <main className={`main-content ${isSidebarOpen ? 'with-sidebar' : 'full-width'}`}>
                <h1>Main Content</h1>
                <p>This is the main content area that should not be pushed by the sidebar.</p>
            </main>
        </div>
    );
}
