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
    game.handleBubble(setIsRightTap)
  }
  const [active, setActive] = React.useState(false)
  const [phase, setPhase] = React.useState("register")
  const [isRightTap, setIsRightTap] = React.useState();

  return (
    <div className="App">
      <button onClick={handleStartButtonPress}>Start</button>
      <button disabled={!active} onClick={() => handleBubbleButtonPress(setPhase)}>Bubble!</button>
      {<>{phase}</>}
      <div>{isRightTap === undefined ? <></> : isRightTap? <>正解</> : <>外れ</>}</div>
    </div>
  );
}

export default App;
