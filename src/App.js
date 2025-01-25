import logo from './logo.svg';
import './App.css';
import React from "react"
import * as game from "./logic/game"

function App() {
  const handleStartButtonPress = () => {
    setActive(true)
    game.newGame()
    game.start()
  }
  const handleBubbleButtonPress = () => {
    game.handleBubble()
  }
  const [active, setActive] = React.useState(false)
  return (
    <div className="App">
      <button onClick={handleStartButtonPress}>Start</button>
      <button disabled={!active} onClick={handleBubbleButtonPress}>Bubble!</button>
    </div>
  );
}

export default App;
