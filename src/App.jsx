import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Releases from './components/Releases';
import Bio from './components/Bio';
import Shows from './components/Shows';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Player from './components/Player';
import mummyAdaImg from './images/Mummy Ada.jpg'; // Default

function App() {
  const [currentTrack, setCurrentTrack] = useState({
    title: "Basket Of Thanks: Ugba Ekele",
    artist: "Evang. Victoria Onyebuchi",
    cover: mummyAdaImg,
    src: null // Default has no audio yet
  });
  const [isPlaying, setIsPlaying] = useState(false);

  const playTrack = (track) => {
    setCurrentTrack(track);
    setIsPlaying(true);
  };

  return (
    <div className="app">
      <Navbar />
      <main>
        <Hero />
        <Releases onPlay={playTrack} />
        <Bio />
        <Shows />
        <Contact />
      </main>
      <Footer />
      <Player
        currentTrack={currentTrack}
        isPlaying={isPlaying}
        setIsPlaying={setIsPlaying}
      />
    </div>
  );
}

export default App;
