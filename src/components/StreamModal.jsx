import React from 'react';
import './StreamModal.css';

const StreamModal = ({ isOpen, onClose, links }) => {
    if (!isOpen) return null;

    const services = [
        {
            name: 'Spotify',
            url: links?.spotify || 'https://open.spotify.com/artist/0gtDiMtLlvORzlsF6SRkun',
            color: '#1DB954',
            icon: (
                <svg viewBox="0 0 24 24" width="24" height="24" fill="currentColor">
                    <path d="M12 0C5.4 0 0 5.4 0 12s5.4 12 12 12 12-5.4 12-12S18.66 0 12 0zm5.521 17.34c-.24.359-.66.48-1.021.24-2.82-1.74-6.36-2.101-10.561-1.141-.418.122-.779-.179-.899-.539-.12-.421.18-.78.54-.9 4.56-1.021 8.52-.6 11.64 1.32.42.18.479.659.301 1.02zm1.44-3.3c-.301.42-.841.6-1.262.3-3.239-1.98-8.159-2.58-11.939-1.38-.479.12-1.02-.12-1.14-.6-.12-.48.12-1.021.6-1.141C9.6 9.9 15 10.561 18.72 12.84c.361.181.54.78.241 1.2zm.12-3.36C15.24 8.4 8.82 8.16 5.16 9.301c-.6.179-1.2-.181-1.38-.721-.18-.601.18-1.2.72-1.381 4.26-1.26 11.28-1.02 15.721 1.621.539.3.719 1.02.419 1.56-.299.421-1.02.599-1.559.3z" />
                </svg>
            )
        },
        {
            name: 'Audiomack',
            url: links?.audiomack || '#',
            color: '#FFA200',
            icon: (
                <svg viewBox="0 0 24 24" width="24" height="24" fill="currentColor">
                    <path d="M0 12c0 5.42 3.65 9.97 8.7 11.53V13.8h3.3v9.42c.87.13 1.77.13 2.67 0V13.8h3.3v9.73C20.97 21.36 24 17.06 24 12c0-6.63-5.37-12-12-12S0 5.37 0 12z" />
                </svg>
            )
        },
        {
            name: 'YouTube',
            url: links?.youtube || 'https://www.youtube.com/@evangvictoriaonyebuchi',
            color: '#FF0000',
            icon: (
                <svg viewBox="0 0 24 24" width="24" height="24" fill="currentColor">
                    <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
                </svg>
            )
        }
    ];

    return (
        <div className="modal-overlay" onClick={onClose}>
            <div className="modal-content" onClick={e => e.stopPropagation()}>
                <button className="close-btn" onClick={onClose}>&times;</button>
                <h3 className="modal-title">Select Platform</h3>

                <div className="platform-list">
                    {services.map((service) => (
                        <a
                            key={service.name}
                            href={service.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="platform-btn"
                            style={{ '--hover-color': service.color }}
                        >
                            <span className="platform-icon" style={{ color: service.color }}>
                                {service.icon}
                            </span>
                            <span className="platform-name">{service.name}</span>
                            <span className="platform-arrow">→</span>
                        </a>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default StreamModal;
