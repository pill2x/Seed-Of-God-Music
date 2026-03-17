import React, { useState } from 'react';
import './Releases.css';
import mummyAdaImg from '../images/Mummy Ada.jpg';
import mummyAdaImg2 from '../images/Mummy Ada 2.png';
import mummyAdaImg4 from '../images/Mummy Ada 4.jpeg';
import iheIMeremAudio from '../audio/Ihe I Mere\'m - Victoria Onyebuchi.mp3';
import nmuoAudio from '../audio/Nmuo - Victoria Onyebuchi.mp3';
import abiawomAudio from '../audio/album/bot/Abiawom - Victoria Onyebuchi.mp3.mp3';
import ekeleGiAudio from '../audio/album/bot/Abiawom e kele gi - Sis. Victoria Prod. by Dannybitz.mp3.mp3';
import emarammaAudio from '../audio/album/bot/Emaramma - Sis. Victoria. Prod. by Dannybitz.mp3.mp3';

import StreamModal from './StreamModal';
import AlbumQueueModal from './AlbumQueueModal';

const releases = [
    {
        id: 1,
        title: "Basket Of Thanks: Ugba Ekele",
        type: "Album",
        year: "2025",
        cover: mummyAdaImg,
        artist: "Evang. Victoria Onyebuchi",
        audio: [
            { title: "Abiawom", src: abiawomAudio },
            { title: "Abiawom e kele gi", src: ekeleGiAudio },
            { title: "Emaramma", src: emarammaAudio }
        ],
        isNew: false,
        links: {
            spotify: "https://open.spotify.com/album/09tmma75UVlCE5Z6wAzkw2",
            audiomack: "#",
            youtube: "https://www.youtube.com/playlist?list=OLAK5uy_mEqsSuJqm_UZfFQTl1iXPQfDeXXVd38II&playnext=1&index=1"
        }
    },
    {
        id: 2,
        title: "Ihe I Mere'm",
        type: "EP",
        year: "2026",
        cover: mummyAdaImg2,
        artist: "Evang. Victoria Onyebuchi",
        audio: iheIMeremAudio,
        isNew: true,
        isUpcoming: true,
        links: {
            spotify: "https://open.spotify.com/artist/0gtDiMtLlvORzlsF6SRkun",
            audiomack: "#",
            youtube: "https://www.youtube.com/@evangvictoriaonyebuchi"
        }
    },
    {
        id: 3,
        title: "Mmụọ",
        type: "Single",
        year: "2026",
        cover: mummyAdaImg4,
        artist: "Evang. Victoria Onyebuchi",
        audio: nmuoAudio,
        isNew: true,
        links: {
            spotify: "https://open.spotify.com/track/0ozqjWWBpPzyMD2FX69AjG?si=e03dfffdbc7b4da9",
            audiomack: "#",
            youtube: "https://youtu.be/T0Xvlt7LBb4?si=IIOb6Tzpi3jccrSz"
        }
    }
];

const Releases = ({ onPlay }) => {
    const [modalOpen, setModalOpen] = useState(false);
    const [selectedLinks, setSelectedLinks] = useState(null);
    const [queueOpen, setQueueOpen] = useState(false);
    const [selectedQueue, setSelectedQueue] = useState(null);

    const openModal = (links) => {
        setSelectedLinks(links);
        setModalOpen(true);
    };

    return (
        <section id="music" className="releases-section">
            <div className="container">
                <div className="section-header">
                    <h2 className="section-title">Latest Ministrations</h2>
                    <div className="section-line"></div>
                </div>

                <div className="releases-grid">
                    {releases.map((release) => (
                        <div key={release.id} className="release-card">
                            <div className="release-image-wrapper">
                                <img src={release.cover} alt={release.title} className="release-cover" />
                                {release.isUpcoming ? (
                                    <span className="upcoming-badge">Coming Soon</span>
                                ) : (
                                    release.isNew && <span className="new-badge">New</span>
                                )}
                                <div className="release-overlay">
                                    {!release.isUpcoming && release.audio && (
                                        <button
                                            className="play-btn"
                                            onClick={() => {
                                                if (Array.isArray(release.audio)) {
                                                    // Start playing the first track of the album, maybe pass the whole queue if Player supports it
                                                    onPlay({
                                                        title: release.audio[0].title,
                                                        artist: release.artist,
                                                        cover: release.cover,
                                                        src: release.audio[0].src,
                                                        queue: release.audio.map(track => ({ ...track, cover: release.cover, artist: release.artist }))
                                                    });
                                                } else {
                                                    onPlay({
                                                        title: release.title,
                                                        artist: release.artist,
                                                        cover: release.cover,
                                                        src: release.audio
                                                    });
                                                }
                                            }}
                                        >
                                            <svg viewBox="0 0 24 24" width="48" height="48" fill="currentColor">
                                                <path d="M8 5v14l11-7z" />
                                            </svg>
                                        </button>
                                    )}
                                </div>
                            </div>
                            <div className="release-info">
                                <span className="release-type">{release.type} • {release.year}</span>
                                <h3 className="release-title">{release.title}</h3>
                                <div className="release-actions">
                                    {release.isUpcoming ? (
                                        <span className="stream-link" style={{ cursor: 'default', color: 'var(--text-muted)' }}>Coming Soon</span>
                                    ) : (
                                        <>
                                            <a
                                                href="#"
                                                className="stream-link"
                                                onClick={(e) => {
                                                    e.preventDefault();
                                                    openModal(release.links);
                                                }}
                                            >
                                                Stream Now
                                            </a>
                                            {Array.isArray(release.audio) ? (
                                                <button
                                                    className="download-link"
                                                    title="View Album Tracks (Queue)"
                                                    style={{ background: 'none', border: 'none', padding: 0, cursor: 'pointer' }}
                                                    onClick={() => {
                                                        setSelectedQueue({
                                                            title: release.title,
                                                            cover: release.cover,
                                                            artist: release.artist,
                                                            tracks: release.audio
                                                        });
                                                        setQueueOpen(true);
                                                    }}
                                                >
                                                    <svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor">
                                                        <path d="M15 6H3v2h12V6zm0 4H3v2h12v-2zM3 16h8v-2H3v2zM17 6v8.18c-.31-.11-.65-.18-1-.18-1.66 0-3 1.34-3 3s1.34 3 3 3 3-1.34 3-3V8h3V6h-5z" />
                                                    </svg>
                                                </button>
                                            ) : (
                                                release.audio && (
                                                    <a
                                                        href={release.audio}
                                                        download={`${release.title} - ${release.artist}.mp3`}
                                                        className="download-link"
                                                        title="Download Audio"
                                                    >
                                                        <svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor">
                                                            <path d="M19 9h-4V3H9v6H5l7 7 7-7zM5 18v2h14v-2H5z" />
                                                        </svg>
                                                    </a>
                                                )
                                            )}
                                        </>
                                    )}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            <StreamModal
                isOpen={modalOpen}
                onClose={() => setModalOpen(false)}
                links={selectedLinks}
            />

            <AlbumQueueModal
                isOpen={queueOpen}
                onClose={() => setQueueOpen(false)}
                queueData={selectedQueue}
                onPlayTrack={onPlay}
            />
        </section>
    );
};
export default Releases;
