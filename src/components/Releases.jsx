import React, { useState } from 'react';
import './Releases.css';
import mummyAdaImg from '../images/Mummy Ada.jpg';
import mummyAdaImg2 from '../images/Mummy Ada 2.png';
import mummyAdaImg4 from '../images/Mummy Ada 4.png';
import iheIMeremAudio from '../audio/Ihe I Mere\'m - Victoria Onyebuchi.mp3';
import ezeNdeEzeAudio from '../audio/Eze Nde Eze - Victoria Onyebuchi-1.mp3';
import StreamModal from './StreamModal';

const releases = [
    {
        id: 1,
        title: "Basket Of Thanks: Ugba Ekele",
        type: "Album",
        year: "2025",
        cover: mummyAdaImg,
        artist: "Evang. Victoria Onyebuchi",
        audio: null,
        links: {
            spotify: "https://open.spotify.com/artist/0gtDiMtLlvORzlsF6SRkun",
            audiomack: "#",
            youtube: "https://www.youtube.com/@evangvictoriaonyebuchi"
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
        links: {
            spotify: "https://open.spotify.com/artist/0gtDiMtLlvORzlsF6SRkun",
            audiomack: "#",
            youtube: "https://www.youtube.com/@evangvictoriaonyebuchi"
        }
    },
    {
        id: 3,
        title: "Eze Nde Eze",
        type: "Single",
        year: "2026",
        cover: mummyAdaImg4,
        artist: "Evang. Victoria Onyebuchi",
        audio: ezeNdeEzeAudio,
        links: {
            spotify: "#",
            audiomack: "#",
            youtube: "#"
        }
    }
];

const Releases = ({ onPlay }) => {
    const [modalOpen, setModalOpen] = useState(false);
    const [selectedLinks, setSelectedLinks] = useState(null);

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
                                <div className="release-overlay">
                                    <button
                                        className="play-btn"
                                        onClick={() => {
                                            if (release.audio) {
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
                                </div>
                            </div>
                            <div className="release-info">
                                <span className="release-type">{release.type} • {release.year}</span>
                                <h3 className="release-title">{release.title}</h3>
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
        </section>
    );
};
export default Releases;
