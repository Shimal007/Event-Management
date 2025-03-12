    import React from 'react';
    import './Navbar.css';

    const NavBar = () => {
    return (
        <nav className="navbar">
        <div className="nav-links">
            <a href="#home">Home</a>
            <a href="#about">About TBI@KEC</a>
            <a href="#facilities">Thrust Areas</a>
            <a href="#incubatees">Infrastructure</a>
            <a href="#contact">Facilities</a>
            <a href="#activities">Activities</a>
            <a href="#service">Service</a>
            <a href="#schemes">Schemes</a>
            <a href="#partners">Partners</a>
            <a href="#incubatees">Incubatees</a>
            <a href="#products">Products</a>
            <a href="#contactus">Contact Us</a>
        </div>
        <div className="social-icons">
            {/* Instagram Icon */}
            <a href="https://www.instagram.com/kongutbi/" target="_blank" rel="noopener noreferrer" className="social-icon instagram-icon">
            <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
            </svg>
            </a>
            
            {/* Threads Icon */}
            <a href="https://x.com/KonguTBI?t=fNCHZsSH_o4YTue-Z-M0Cg&s=09" target="_blank" rel="noopener noreferrer" className="social-icon threads-icon">
            <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10 10-4.5 10-10S17.5 2 12 2z"></path>
                <path d="M12 7v10"></path>
                <path d="M15.2 8.2c1.2 1.2 1.2 3-.1 4.3-1.2 1.2-3.1 1.2-4.3 0"></path>
                <path d="M8.8 15.8c-1.2-1.2-1.2-3 .1-4.3 1.2-1.2 3.1-1.2 4.3 0"></path>
            </svg>
            </a>
            
            {/* LinkedIn Icon */}
            <a href="https://www.linkedin.com/company/kongutbi/posts/?feedView=all" target="_blank" rel="noopener noreferrer" className="social-icon linkedin-icon">
            <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                <rect x="2" y="9" width="4" height="12"></rect>
                <circle cx="4" cy="4" r="2"></circle>
            </svg>
            </a>
        </div>
        </nav>
    );
    };

    export default NavBar;