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
    game.newGame(setPhase, setActive, setUraimoriIndex)
    game.start()
    setIsInitialized(true)
  }
  const handleBubbleButtonPress = () => {
    game.handleBubble(setIsRightTap, addMistakeNum)
    setIsOpenMouse(true)
    setTimeout(() => {
      setIsOpenMouse(false);
    }, 300);

  }
  const [active, setActive] = React.useState("opening")
  const [phase, setPhase] = React.useState("register")
  const [isOpenMouse, setIsOpenMouse] = React.useState(false) 
  const [isRightTap, setIsRightTap] = React.useState();
  const [uraimoriIndex, setUraimoriIndex] = React.useState(3);
  const [mistakeNum, setMistakeNum] = React.useState(0);
  const [isInitialized, setIsInitialized] = React.useState(false);

  React.useEffect(() => {
    console.log(`uraimoriIndex === 3: ${uraimoriIndex === 3}`)
    if (uraimoriIndex === 3 && isInitialized) setActive("end")
  }, [uraimoriIndex])

  function addMistakeNum() {
    const tmpMistakeNum = mistakeNum + 1
    setMistakeNum(tmpMistakeNum)
  }
 
  return (
    <div className="App">
      {active === "opening" && <div className='opening-image-wrapper' onClick={handleStartButtonPress}>
        <img
          className='family-image'
          src={process.env.PUBLIC_URL + "/art/titleUI.png"}
          alt="ホライモリの家族 logo: オレンジ色の背景に、ゲームタイトルと、大きく口を開けたイモリのキャラクターが並ぶ。左上に紫色、左下に青緑色、中央に緑色、右に赤色。"
        />
        {/* <button onClick={handleStartButtonPress}>Game Start</button> */}
      </div>}
      {active === "active" && <>
        <div className='image-wrapper' onClick={() => handleBubbleButtonPress(setPhase)}>
          <img className='bg-image' src={process.env.PUBLIC_URL + "/art/background.png"}></img>
          {
            uraimoriIndex === 0 && <span className='character1'>
            {isOpenMouse && <img className='character1-openmouse' src={process.env.PUBLIC_URL + "/art/char1_frame2.png"}></img>}
            {!isOpenMouse && <img className='character1-openmouse' src={process.env.PUBLIC_URL + "/art/char1_frame1.png"}></img>}
          </span>
          }
          {
            uraimoriIndex === 1 && <span className='character2'>
            {isOpenMouse && <img className='character2-openmouse' src={process.env.PUBLIC_URL + "/art/char2_frame2.png"}></img>}
            {!isOpenMouse && <img className='character2-openmouse' src={process.env.PUBLIC_URL + "/art/char2_frame1.png"}></img>}
          </span>
          }
          {
            uraimoriIndex === 2 && <span className='character3'>
            {isOpenMouse && <img className='character3-openmouse' src={process.env.PUBLIC_URL + "/art/char3_frame2.png"}></img>}
            {!isOpenMouse && <img className='character3-openmouse' src={process.env.PUBLIC_URL + "/art/char3_frame1.png"}></img>}
          </span>
          }
          {
            uraimoriIndex === 3 && <span className='character4'>
            {isOpenMouse && <img className='character4-openmouse' src={process.env.PUBLIC_URL + "/art/char4_frame2.png"}></img>}
            {!isOpenMouse && <img className='character4-openmouse' src={process.env.PUBLIC_URL + "/art/char4_frame1.png"}></img>}
          </span>
          }
          <span className='mistake-number'>{mistakeNum}</span>
        </div>
      </>}
      {(active === "pause") && <>
        <div className='image-wrapper'  onClick={handlePlayButtonPress}>
          <img className='bg-image' src={process.env.PUBLIC_URL + "/art/background.png"}></img>
          <img className='bg-image' src={process.env.PUBLIC_URL + "/art/pause.png"}></img>
          <span className='mistake-number'>{mistakeNum}</span>
        </div>

        {/* <button onClick={handlePlayButtonPress}>Start</button>
        <button disabled={active !== "active"} onClick={() => handleBubbleButtonPress(setPhase)}>Bubble!</button>
        {<>{phase}</>}
        <div>{isRightTap === undefined ? <></> : isRightTap? <>正解</> : <>外れ</>}</div> */}
      </>}
      {(active === "end") && <>
        <div className='image-wrapper'>
          <img className='bg-image' src={process.env.PUBLIC_URL + "/art/background.png"}></img>
          <img className='bg-image' src={process.env.PUBLIC_URL + "/art/endscreen.png"}></img>
          <span className='mistake-number-ending'>{mistakeNum}</span>
        </div>

        {/* <button onClick={handlePlayButtonPress}>Start</button>
        <button disabled={active !== "active"} onClick={() => handleBubbleButtonPress(setPhase)}>Bubble!</button>
        {<>{phase}</>}
        <div>{isRightTap === undefined ? <></> : isRightTap? <>正解</> : <>外れ</>}</div> */}
      </>}
    </div>
  );
}

export default App;
