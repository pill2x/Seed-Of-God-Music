import React, { useState } from 'react';
import './Bio.css';
import mummyAdaImg from '../images/Mummy Ada 2.jpg';
import adaJesusImg from '../images/Ada Jesus.jpg';

const Bio = () => {
    const [expanded1, setExpanded1] = useState(false);
    const [expanded2, setExpanded2] = useState(false);

    return (
        <section id="about" className="bio-section">
            <div className="container">
                <h2 className="section-title center">The Ministry</h2>
                <p className="bio-tagline center">Generations United in Worship</p>

                {/* Profile 1: Evang. Victoria */}
                <div className="bio-container">
                    <div className="bio-image">
                        <div className="image-frame">
                            <img src={mummyAdaImg} alt="Evang. Victoria Onyebuchi" />
                        </div>
                    </div>

                    <div className="bio-content">
                        <h3 className="artist-name-small">Evang. Victoria Onyebuchi</h3>
                        <p className="artist-role">Visionary & Lead Minister</p>

                        <div className="bio-text">
                            <p>
                                With a voice that carries the weight of glory and a heart completely sold out to God, <strong>Seed Of God Music</strong> is
                                redefining contemporary gospel music. Her sound is a divine fusion of deep spiritual truth and
                                soul-stirring melodies that transcend borders.
                            </p>
                            {expanded1 && (
                                <div className="bio-expanded fade-in">
                                    <p>
                                        Kingdom-minded and spirit-led, she has crafted a unique sonic signature that speaks to both
                                        the church and the streets. Her lyrics are born from a place of deep communion, speaking of
                                        redemption, grace, and the unwavering love of the Father.
                                    </p>
                                </div>
                            )}

                            <button
                                className="read-more-btn"
                                onClick={() => setExpanded1(!expanded1)}
                            >
                                {expanded1 ? 'Read Less' : 'Read Full Bio'}
                            </button>
                        </div>
                    </div>
                </div>

                {/* Profile 2: Min. Ada Jesus */}
                <div className="bio-container reversed">
                    <div className="bio-content">
                        <h3 className="artist-name-small">Min. Ada Jesus</h3>
                        <p className="artist-role">Next Gen Minister & Vocalist</p>

                        <div className="bio-text">
                            <p>
                                Carrying the mantle forward, she brings a fresh, vibrant energy to the ministry.
                                Her voice is a testament to the legacy of worship, blending modern contemporary
                                sounds with the timeless truth of the Gospel.
                            </p>
                            {expanded2 && (
                                <div className="bio-expanded fade-in">
                                    <p>
                                        Together with her mother, they form a powerhouse of praise, bridging the gap between
                                        generations and proving that the spirit of worship knows no age. Her unique style
                                        appeals to the youth while maintaining the spiritual depth that the ministry is known for.
                                    </p>
                                </div>
                            )}

                            <button
                                className="read-more-btn"
                                onClick={() => setExpanded2(!expanded2)}
                            >
                                {expanded2 ? 'Read Less' : 'Read Full Bio'}
                            </button>
                        </div>
                    </div>

                    <div className="bio-image">
                        <div className="image-frame">
                            <img src={adaJesusImg} alt="Min. Ada Jesus" />
                        </div>
                    </div>
                </div>

            </div>
        </section>
    );
};

export default Bio;
