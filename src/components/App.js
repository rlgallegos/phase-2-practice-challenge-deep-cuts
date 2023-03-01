import React, {useState, useEffect} from "react";
import TracksPage from './TracksPage'
import '../App.css';
import vinyl from '../assets/vinyl_PNG88.png';

function App() {
  const [tracks, setTracks] = useState([])

  useEffect(() => {
    fetch('http://localhost:8001/tracks')
    .then(res => res.json())
    .then(data => {
      setTracks(data)
    })
  }, [])

  function handleAddTrack(trackObj) {
    setTracks([...tracks, trackObj])
  }

  function handleDeleteTrack(trackObj) {
    const newArray = tracks.filter(track => trackObj.id !== track.id)
    setTracks(newArray)
  }

  return (
    <div>
      <div className="header">
        <img src={vinyl} alt="vinyl record" />
        <h1>Flatiron Deep Cuts</h1>
      </div>
      <TracksPage handleDeleteTrack={handleDeleteTrack} handleAddTrack={handleAddTrack} tracks={tracks} />
    </div>
  );
}

export default App;
