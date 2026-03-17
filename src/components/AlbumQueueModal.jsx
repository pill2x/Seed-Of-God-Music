import React from 'react';
import './StreamModal.css';

const AlbumQueueModal = ({ isOpen, onClose, queueData, onPlayTrack }) => {
    if (!isOpen || !queueData) return null;

    return (
        <div className="modal-overlay" onClick={onClose}>
            <div className="modal-content queue-modal-content" onClick={e => e.stopPropagation()}>
                <button className="close-btn" onClick={onClose}>&times;</button>
                <div className="queue-header">
                    <img src={queueData.cover} alt={queueData.title} className="queue-cover" />
                    <div>
                        <h3 className="modal-title" style={{ marginBottom: '0.2rem', textAlign: 'left' }}>{queueData.title}</h3>
                        <p style={{ color: 'var(--text-muted)', fontSize: '0.9rem', marginBottom: '1.5rem', textAlign: 'left' }}>{queueData.artist}</p>
                    </div>
                </div>

                <div className="platform-list track-list">
                    {queueData.tracks.map((track, index) => (
                        <div key={index} className="track-item" style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '10px 0', borderBottom: '1px solid rgba(255,255,255,0.1)' }}>
                            <div style={{ display: 'flex', alignItems: 'center', gap: '15px', flex: 1 }}>
                                <span style={{ color: 'var(--text-muted)', fontSize: '0.9rem', width: '20px' }}>{index + 1}</span>
                                <span style={{ color: '#fff' }}>{track.title}</span>
                            </div>
                            <div style={{ display: 'flex', gap: '15px', alignItems: 'center' }}>
                                <button 
                                    onClick={() => {
                                        onPlayTrack({
                                            title: track.title,
                                            artist: queueData.artist,
                                            cover: queueData.cover,
                                            src: track.src,
                                            queue: queueData.tracks.map(t => ({ ...t, cover: queueData.cover, artist: queueData.artist })),
                                            startIndex: index
                                        });
                                        onClose();
                                    }}
                                    style={{ background: 'none', border: 'none', color: 'var(--accent-primary)', cursor: 'pointer', padding: '5px' }}
                                    title="Play Track"
                                >
                                    <svg viewBox="0 0 24 24" width="24" height="24" fill="currentColor">
                                        <path d="M8 5v14l11-7z" />
                                    </svg>
                                </button>
                                <a
                                    href={track.src}
                                    download={`${track.title} - ${queueData.artist}.mp3`}
                                    style={{ color: 'var(--text-muted)', display: 'flex', alignItems: 'center', transition: 'color 0.3s' }}
                                    title="Download Track"
                                    onMouseOver={(e) => e.currentTarget.style.color = 'var(--accent-primary)'}
                                    onMouseOut={(e) => e.currentTarget.style.color = 'var(--text-muted)'}
                                >
                                    <svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor">
                                        <path d="M19 9h-4V3H9v6H5l7 7 7-7zM5 18v2h14v-2H5z" />
                                    </svg>
                                </a>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default AlbumQueueModal;
