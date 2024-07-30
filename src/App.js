import React, { useState } from 'react';
import './App.css';

function App() {
  const [audioTime, setAudioTime] = useState(0);

  const handleResetAudio = () => {
    setAudioTime(5);
  };

  return (
    <div className="App">
      <header className="App-header">
        <h1>Hello, React!</h1>
        <audio controls>
          <source src="audio/mahmoud-khalil-al-husary-surah-001.mp3" type="audio/mpeg" />
          Your browser does not support the audio element.
        </audio>
        <button onClick={handleResetAudio}>Reset Audio</button>
      </header>
    </div>
  );
}

export default App;