import React, { useState, useRef, useEffect } from 'react';
import './Player.css';

const Player = ({ currentTrack, isPlaying, setIsPlaying }) => {
    const [volume, setVolume] = useState(100);
    const [previousVolume, setPreviousVolume] = useState(100);
    const [isMuted, setIsMuted] = useState(false);
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
            audioRef.current.volume = isMuted ? 0 : volume / 100;
        }
    }, [volume, isMuted]);

    // When track changes, auto play if isPlaying is true
    useEffect(() => {
        if (currentTrack.src && isPlaying && audioRef.current) {
            audioRef.current.play();
        }
    }, [currentTrack]);

    const toggleMute = () => {
        if (isMuted) {
            setVolume(previousVolume);
            setIsMuted(false);
        } else {
            setPreviousVolume(volume);
            setVolume(0);
            setIsMuted(true);
        }
    };

    const handleVolumeChange = (e) => {
        const val = Number(e.target.value);
        setVolume(val);
        if (val > 0 && isMuted) {
            setIsMuted(false);
        }
    };

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
        const time = Number(e.target.value);
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
                    <button onClick={toggleMute} className="volume-btn">
                        {volume == 0 || isMuted ? (
                            <svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor" style={{ opacity: 0.7 }}><path d="M16.5 12c0-1.77-1.02-3.29-2.5-4.03v2.21l2.45 2.45c.03-.2.05-.41.05-.63zm2.5 0c0 .94-.2 1.82-.54 2.64l1.51 1.51C20.63 14.91 21 13.5 21 12c0-4.28-2.99-7.86-7-8.77v2.06c2.89.86 5 3.54 5 6.71zM4.27 3L3 4.27 7.73 9H3v6h4l5 5v-6.73l4.25 4.25c-.67.52-1.42.93-2.25 1.18v2.06c1.38-.31 2.63-.95 3.69-1.81L19.73 21 21 19.73 4.27 3zM12 4L9.91 6.09 12 8.18V4z" /></svg>
                        ) : (
                            <svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor" style={{ opacity: 0.7 }}><path d="M3 9v6h4l5 5V4L7 9H3zm13.5 3c0-1.77-1.02-3.29-2.5-4.03v8.05c1.48-.73 2.5-2.25 2.5-4.02zM14 3.23v2.06c2.89.86 5 3.54 5 6.71s-2.11 5.85-5 6.71v2.06c4.01-.91 7-4.49 7-8.77s-2.99-7.86-7-8.77z" /></svg>
                        )}
                    </button>

                    <input
                        type="range"
                        min="0"
                        max="100"
                        value={volume}
                        onChange={handleVolumeChange}
                        className="volume-slider smooth-slider"
                        style={{
                            backgroundSize: `${volume}% 100%`
                        }}
                    />
                </div>
            </div>
        </div>
    );
};

export default Player;
