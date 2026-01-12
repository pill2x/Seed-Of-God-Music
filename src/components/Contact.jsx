import React from 'react';
import './Contact.css';

const Contact = () => {
    return (
        <section id="contact" className="contact-section">
            <div className="container contact-container">
                <div className="contact-info">
                    <h2 className="section-title">Get In Touch</h2>
                    <p>
                        For bookings, press inquiries, or collaborations, please fill out the form or reach out directly.
                    </p>

                    <div className="contact-details">
                        <div className="detail-group">
                            <h4>Bookings</h4>
                            <p>evangvictoriaonyebuchi@gmail.com</p>
                        </div>
                        <div className="detail-group">
                            <h4>Management</h4>
                            <p>evangvictoriaonyebuchi@gmail.com</p>
                        </div>
                    </div>
                </div>

                <form className="contact-form">
                    <div className="form-group">
                        <input type="text" placeholder="Your Name" required />
                    </div>
                    <div className="form-group">
                        <input type="email" placeholder="Email Address" required />
                    </div>
                    <div className="form-group">
                        <input type="text" placeholder="Subject" required />
                    </div>
                    <div className="form-group">
                        <textarea rows="5" placeholder="Message" required></textarea>
                    </div>
                    <button type="submit" className="submit-btn">Send Message</button>
                </form>
            </div>
        </section>
    );
};

export default Contact;
