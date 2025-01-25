import logo from './logo.svg';
import './App.css';
import React from "react"
import * as game from "./logic/game"

function App() {
  const handleStartButtonPress = () => {
    setActive(true)
    game.newGame(setPhase)
    game.start()
  }
  const handleBubbleButtonPress = () => {
    game.handleBubble()
  }
  const [active, setActive] = React.useState(false)
  const [phase, setPhase] = React.useState("register")

  return (
    <div className="App">
      <button onClick={handleStartButtonPress}>Start</button>
      <button disabled={!active} onClick={() => handleBubbleButtonPress(setPhase)}>Bubble!</button>
      {<>{phase}</>}
    </div>
  );
}

export default App;
