import React, { useState, useRef, useEffect } from 'react';
import './Player.css';

const Player = ({ currentTrack, isPlaying, setIsPlaying }) => {
    const [volume, setVolume] = useState(100);
    const [currentTime, setCurrentTime] = useState(0);
    const [duration, setDuration] = useState(0);
    const audioRef = useRef(null);

    useEffect(() => {
        if (audioRef.current) {
            if (isPlaying) {
                audioRef.current.play().catch(error => {
                    console.log("Autoplay prevented:", error);
                    setIsPlaying(false);
                });
            } else {
                audioRef.current.pause();
            }
        }
    }, [isPlaying, currentTrack]);

    useEffect(() => {
        if (audioRef.current) {
            audioRef.current.volume = volume / 100;
        }
    }, [volume]);

    // When track changes, auto play if isPlaying is true
    useEffect(() => {
        if (currentTrack.src && isPlaying && audioRef.current) {
            audioRef.current.play();
        }
    }, [currentTrack]);

    const formatTime = (time) => {
        if (isNaN(time)) return "0:00";
        const minutes = Math.floor(time / 60);
        const seconds = Math.floor(time % 60);
        return `${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;
    };

    const handleTimeUpdate = () => {
        if (audioRef.current) {
            setCurrentTime(audioRef.current.currentTime);
        }
    };

    const handleLoadedMetadata = () => {
        if (audioRef.current) {
            setDuration(audioRef.current.duration);
        }
    };

    const handleSeek = (e) => {
        const time = e.target.value;
        if (audioRef.current) {
            audioRef.current.currentTime = time;
            setCurrentTime(time);
        }
    }


    return (
        <div className="music-player">
            {/* Hidden Audio Element */}
            {currentTrack.src && (
                <audio
                    ref={audioRef}
                    src={currentTrack.src}
                    onEnded={() => setIsPlaying(false)}
                    onTimeUpdate={handleTimeUpdate}
                    onLoadedMetadata={handleLoadedMetadata}
                />
            )}

            <div className="container player-container">
                <div className="track-info">
                    <img
                        src={currentTrack.cover}
                        alt={currentTrack.title}
                        className="player-art"
                    />
                    <div className="track-details">
                        <span className="track-name">{currentTrack.title}</span>
                        <span className="artist">{currentTrack.artist}</span>
                    </div>
                </div>

                <div className="player-center">
                    <div className="player-controls">
                        <button className="control-btn prev">
                            <svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor"><path d="M6 6h2v12H6zm3.5 6l8.5 6V6z" /></svg>
                        </button>

                        <button
                            className={`control-btn play ${isPlaying ? 'playing' : ''}`}
                            onClick={() => setIsPlaying(!isPlaying)}
                        >
                            {isPlaying ? (
                                <svg viewBox="0 0 24 24" width="24" height="24" fill="currentColor"><path d="M6 19h4V5H6v14zm8-14v14h4V5h-4z" /></svg>
                            ) : (
                                <svg viewBox="0 0 24 24" width="24" height="24" fill="currentColor"><path d="M8 5v14l11-7z" /></svg>
                            )}
                        </button>

                        <button className="control-btn next">
                            <svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor"><path d="M6 18l8.5-6L6 6v12zM16 6v12h2V6h-2z" /></svg>
                        </button>
                    </div>

                    <div className="player-progress">
                        <span className="time-current">{formatTime(currentTime)}</span>
                        <input
                            type="range"
                            min="0"
                            max={duration || 0}
                            value={currentTime}
                            onChange={handleSeek}
                            className="progress-bar smooth-slider"
                            style={{
                                backgroundSize: `${(currentTime / duration) * 100}% 100%`
                            }}
                        />
                        <span className="time-total">{formatTime(duration)}</span>
                    </div>
                </div>

                <div className="player-volume">
                    <svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor" style={{ opacity: 0.7 }}><path d="M3 9v6h4l5 5V4L7 9H3zm13.5 3c0-1.77-1.02-3.29-2.5-4.03v8.05c1.48-.73 2.5-2.25 2.5-4.02zM14 3.23v2.06c2.89.86 5 3.54 5 6.71s-2.11 5.85-5 6.71v2.06c4.01-.91 7-4.49 7-8.77s-2.99-7.86-7-8.77z" /></svg>
                    <input
                        type="range"
                        min="0"
                        max="100"
                        value={volume}
                        onChange={(e) => setVolume(e.target.value)}
                        className="volume-slider"
                    />
                </div>
            </div>
        </div>
    );
};

export default Player;
