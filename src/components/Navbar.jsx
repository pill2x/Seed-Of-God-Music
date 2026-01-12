import React, { useState, useEffect } from 'react';
import './Navbar.css';

const Navbar = () => {
    const [scrolled, setScrolled] = useState(false);
    const [isOpen, setIsOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
            <div className="container nav-content">
                <div className="logo">SEED OF GOD MUSIC</div>

                <div className={`nav-links ${isOpen ? 'active' : ''}`}>
                    <a href="#home" onClick={() => setIsOpen(false)}>Home</a>
                    <a href="#music" onClick={() => setIsOpen(false)}>Music</a>
                    <a href="#about" onClick={() => setIsOpen(false)}>About</a>
                    <a href="#shows" onClick={() => setIsOpen(false)}>Shows</a>
                    <a href="#contact" onClick={() => setIsOpen(false)} className="cta-btn">Book Now</a>
                </div>

                <div className="hamburger" onClick={() => setIsOpen(!isOpen)}>
                    <span></span>
                    <span></span>
                    <span></span>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
