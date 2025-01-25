import * as sound from "./sound"
import * as baseTime from "./baseTime";
import * as tap from "./tap";
import * as phase from "./phase";

let currentPattern = []
// let phase = "playback"

export function newGame(setPhase) {
  // sound.initSounds(onBeforeTick, onAfterTick)
  sound.initSounds(phase.handlePhase, setPhase)
  baseTime.resetBaseTime()
}

export function start() {
  currentPattern = generatePattern()
  sound.syncPattern(currentPattern)
  // moveToPlaybackPhase()
  sound.loopMainMusic()
  baseTime.resetBaseTime()
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

export function handleBubble() {
  // if(phase !== "input") {
  //   return
  // }
  sound.playBubbleSound()
  tap.tap(baseTime.getElapsedTimeInLoop())
}
