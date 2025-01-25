import logo from './logo.svg';
import './App.css';
import * as sound from "./logic/sound"


function App() {
  const handleStartButtonPress = () => {
    sound.initSounds()
    sound.loopMainMusic()
  }
  return (
    <div className="App">
      <button onClick={handleStartButtonPress}>Start</button>
    </div>
  );
}

export default App;
