import logo from './logo.svg';
import './App.css';
import React from "react"
import * as game from "./logic/game"

function App() {
  const handleStartButtonPress = () => {
    setActive("pause")
  }
  const handlePlayButtonPress = () => {
    setActive("active")
    game.newGame(setPhase, setActive)
    game.start()
  }
  const handleBubbleButtonPress = () => {
    game.handleBubble(setIsRightTap)
  }
  const [active, setActive] = React.useState("opening")
  const [phase, setPhase] = React.useState("register")
  const [isRightTap, setIsRightTap] = React.useState();

  return (
    <div className="App">
      {active === "opening" && <>
        <img className='family-image' src={process.env.PUBLIC_URL + "images/horaimori_family.png"}></img>
        <button onClick={handleStartButtonPress}>Game Start</button>
      </>}
      {(active === "active" || active === "pause") && <>
        <button onClick={handlePlayButtonPress}>Start</button>
        <button disabled={active !== "active"} onClick={() => handleBubbleButtonPress(setPhase)}>Bubble!</button>
        {<>{phase}</>}
        <div>{isRightTap === undefined ? <></> : isRightTap? <>正解</> : <>外れ</>}</div>
      </>}
    </div>
  );
}

export default App;
