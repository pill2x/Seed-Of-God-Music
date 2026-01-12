import React from 'react';
import './Shows.css';

const Shows = () => {
    return (
        <section id="shows" className="shows-section">
            <div className="container">
                <h2 className="section-title center">Upcoming Ministrations</h2>

                <div className="shows-empty-state">
                    <p className="empty-message">No upcoming dates scheduled at the moment.</p>
                    <p className="empty-submessage">Subscribe to the newsletter to be the first to know when <strong>Seed Of God</strong> is ministering near you.</p>

                    <div className="newsletter-signup">
                        <input type="email" placeholder="Enter your email" className="email-input" />
                        <button className="subscribe-btn">Notify Me</button>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Shows;
