import * as sound from "./sound"
import * as baseTime from "./baseTime";
import * as phase from "./phase";
import * as tapRegistry from "./tapRegistry";

let currentPattern = []
// let phase = "playback"

export function newGame(setPhase, setActive) {
  // sound.initSounds(onBeforeTick, onAfterTick)
  sound.initSounds(phase.handlePhase, setPhase, baseTime.resetBaseTime, phase.getIsFirstImitaionPhase, setActive)
}

export function start() {
  currentPattern = generatePattern()
  sound.syncPattern(currentPattern)
  // moveToPlaybackPhase()
  sound.loopMainMusic()
}

export function generatePattern() {
  return [true, true, true, true];
}

// export function moveToPlaybackPhase() {
//   phase = "playback"
// }

// export function moveToInputPhase() {
//   phase = "input"
// }

// function onBeforeTick(count) {
//   if(phase === "input") {
//     handleInputPhase(count)
//   }
// }

// function onAfterTick(count) {
//   if(phase === "playback") {
//     handlePlaybackPhase(count)
//   }
// }

// function handlePlaybackPhase(count) {
//   if(count === currentPattern.length) {
//     moveToInputPhase()
//     sound.syncPhase(phase)
//   }
// }

// function handleInputPhase(count) {
//   if(count === currentPattern.length) {
//     currentPattern = generatePattern();
//     sound.syncPattern(currentPattern);
//     moveToPlaybackPhase();
//     sound.syncPhase(phase);
//   }
// }

export function handleBubble(setIsRightTap) {
  // if(phase !== "input") {
  //   return
  // }
  sound.playBubbleSound()
  if (phase.getPhase() === phase.IMITATION) {
    const isJudgeOK = tapRegistry.judge(baseTime.getElapsedTime(), tapRegistry.getTapRegistry()[phase.getPresentImitationNum()])
    if(isJudgeOK) {
      sound.playOKSound()
    } else {
      sound.playNGSound()
    }
    setIsRightTap(isJudgeOK);
  } else {
    tapRegistry.register(baseTime.getElapsedTime(), phase.getPresentImitationNum());
  }
}
