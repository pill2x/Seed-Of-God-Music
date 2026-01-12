import React from 'react';
import './Footer.css';

const Footer = () => {
    return (
        <footer className="footer">
            <div className="container footer-content">
                <div className="social-links">
                    <a href="#" className="social-link">Instagram</a>
                    <a href="#" className="social-link">Faceboook</a>
                    <a href="https://open.spotify.com/artist/0gtDiMtLlvORzlsF6SRkun?si=SZJctpbDSJSA_rUttfOt1g" className="social-link">Spotify</a>
                    <a href="#" className="social-link">Audiomack</a>
                    <a href="https://www.youtube.com/@evangvictoriaonyebuchi" className="social-link">YouTube</a>
                </div>

                <p className="copyright">
                    &copy; {new Date().getFullYear()} Seed Of God Music. All rights reserved.
                </p>
            </div>
        </footer>
    );
};

export default Footer;
