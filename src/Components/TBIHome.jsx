import React, { useState, useEffect } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import linkedinLogo from '../assets/icons8-instagram-48.png';
import instagramLogo from '../assets/icons8-linkedin-48.png';
import threadsLogo from '../assets/icons8-twitter-48.png';

import './TBIHome.css';
import NavBar from './NavBar';

// Import images
import headerBanner from '../assets/banner-image.jpg'; // The top banner image
import slide1 from '../assets/5.jpg';
import slide2 from '../assets/6.jpg';
import slide3 from '../assets/7.jpg';

const TBIHome = () => {
  const [introComplete, setIntroComplete] = useState(false);
  
  useEffect(() => {
    // Show intro animations, then set to complete after 4 seconds
    const timer = setTimeout(() => {
      setIntroComplete(true);
    }, 4000);
    
    return () => clearTimeout(timer);
  }, []);

  // Carousel settings
  const carouselSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000
  };

  if (!introComplete) {
    return (
      <div className="intro-animation">
        <div className="intro-section intro-section-1">
          <h1>TBI</h1>
        </div>
        <div className="intro-section intro-section-2">
          <h2>Want to be an Entrepreneur?</h2>
        </div>
      </div>
    );
  }

  return (
    <div className="tbi-container">
      {/* Fixed Header with Banner and Navigation */}
      <header className="site-header">
        {/* Top Banner */}
        <div className="header-banner">
          <img src={headerBanner} alt="TBI@KEC Banner" className="header-banner-image" />
        </div>
        
        {/* Navigation Bar */}
        <nav className="main-navigation">
          <div className="nav-links">
            <a href="#home">Home</a>
            <a href="#about">About TBI@KEC</a>
            <a href="#thrust">Thrust Areas</a>
            <a href="#infrastructure">Infrastructure</a>
            <a href="#facilities">Facilities</a>
            <a href="#activities">Activities</a>
            <a href="#service">Service</a>
            <a href="#schemes">Schemes</a>
            <a href="#partners">Partners</a>
            <a href="#incubatees">Incubatees</a>
            <a href="#products">Products</a>
            <a href="#contact">Contact Us</a>
          </div>
          <div className="social-icons">
            <a href="#instagram" className="social-icon">
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
              </svg>
            </a>
            <a href="#twitter" className="social-icon">
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z"></path>
              </svg>
            </a>
            <a href="#linkedin" className="social-icon">
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                <rect x="2" y="9" width="4" height="12"></rect>
                <circle cx="4" cy="4" r="2"></circle>
              </svg>
            </a>
          </div>
        </nav>
      </header>
      
      {/* Main Content */}
      <main className="site-content">
        {/* Carousel Section */}
        <section className="carousel-section">
          <div className="carousel-container">
          <Slider {...carouselSettings}>
  <div className="carousel-slide">
    <img src={slide1} alt="TBI Slide 1" className="carousel-image" />
    <div className="carousel-caption">
      <h2>Technology Business Incubator</h2>
      <p>Fostering Innovation and Entrepreneurship</p>
    </div>
  </div>
  <div className="carousel-slide">
    <img src={slide2} alt="TBI Slide 2" className="carousel-image" />
    <div className="carousel-caption">
      <h2>Start Your Journey</h2>
      <p>From Ideation to Implementation</p>
    </div>
  </div>
  <div className="carousel-slide">
    <img src={slide3} alt="TBI Slide 3" className="carousel-image" />
    <div className="carousel-caption">
      <h2>Grow Your Business</h2>
      <p>With Expert Mentorship and Resources</p>
    </div>
  </div>
</Slider>

          </div>
        </section>
        
        {/* About Section */}
        <section id="about" className="about-section content-section">
          <div className="section-container">
            <h2>About TBI@KEC</h2>
            <p>
              Technology Business Incubator at Kongu Engineering College (TBI@KEC) is a vibrant ecosystem 
              for budding entrepreneurs and innovators. Established with support from the Department of 
              Science and Technology, Government of India, TBI@KEC provides a nurturing environment for 
              technology-based startups to grow and flourish.
            </p>
            <p>
              Our mission is to foster innovation, incubate promising startups, and contribute to the 
              growth of the entrepreneurial ecosystem. We offer state-of-the-art infrastructure, mentorship, 
              networking opportunities, and funding support to help startups transform their ideas into 
              successful businesses.
            </p>
          </div>
        </section>
        
        {/* Add more sections as needed */}
      </main>
      
      {/* Footer */}
      <footer className="site-footer">
  <div className="footer-content">
    {/* Footer Info */}
    <div className="footer-info">
      <h3>TBI@KEC</h3>
      <p>Perundurai, Erode - 638 060</p>
      <p>Email: tbi@kongu.ac.in</p>
      <p>Phone: +91 4294 226600</p>
    </div>

    {/* Quick Links */}
    <div className="footer-links">
      <h3>Quick Links</h3>
      <ul>
        <li><a href="#home">Home</a></li>
        <li><a href="#about">About Us</a></li>
        <li><a href="#apply">Apply for Incubation</a></li>
        <li><a href="#contact">Services</a></li>
      </ul>
    </div>

    {/* Social Media Links */}
    <div className="footer-contact">
      <h3>Contact Us</h3>
      <div className="footer-social-icons">
        <a href="#linkedin" className="social-icon">
          <img src={linkedinLogo} alt="LinkedIn" />
        </a>
        <a href="#instagram" className="social-icon">
          <img src={instagramLogo} alt="Instagram" />
        </a>
        <a href="#threads" className="social-icon">
          <img src={threadsLogo} alt="Threads" />
        </a>
      </div>
    </div>
  </div>

  {/* Footer Bottom */}
  <div className="footer-bottom">
    <p>&copy; {new Date().getFullYear()} TBI@KEC. All Rights Reserved.</p>
  </div>
</footer>

    </div>
  );
};

export default TBIHome;