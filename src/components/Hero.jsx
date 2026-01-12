import React from 'react';
import './Hero.css';
import heroBg from '../images/Mummy Ada 3.png';

const Hero = () => {
    return (
        <section
            id="home"
            className="hero"
            style={{
                backgroundImage: `linear-gradient(rgba(0,0,0,0.3), rgba(0,0,0,0.6)), url("${heroBg}")`
            }}
        >
            <div className="hero-overlay"></div>
            <div className="hero-content container fade-in">
                <h2 className="tagline">The Voice of New Generation Gospel</h2>
                <h1 className="artist-name">SEED OF<br /><span className="outline-text">GOD MUSIC</span></h1>

                <div className="hero-actions">
                    <a href="#music" className="btn btn-primary">Latest Release</a>
                    <a href="#shows" className="btn btn-outline">Tour Dates</a>
                </div>
            </div>

            <div className="scroll-indicator">
                <span>Scroll</span>
                <div className="arrow"></div>
            </div>
        </section>
    );
};

export default Hero;
