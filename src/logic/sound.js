import { Howl } from "howler";

const howlMap = {}
let initialized = false
let ticking = false;
let currentPattern = []
let currentTick = 0
let currentPhase = "playback"
// let onBeforeTick = null
// let onAfterTick = null

// export function initSounds(onBeforeTickFn, onAfterTickFn) {
export function initSounds(onSwitchingFn, setPhase) {
  if(initialized) {
    return
  }
  // onBeforeTick = onBeforeTickFn
  // onAfterTick = onAfterTickFn
  howlMap["music"] = new Howl({
    src: [process.env.PUBLIC_URL + "sounds/bgm1.wav"],
    loop: true,
  });
  howlMap["music"].on("play", () => {
    if(ticking) {
      return;
    }
    // musicTick()
    // setInterval(musicTick, 500)
    ticking = true;
  })
  howlMap["music"].on("end", () => {
    onSwitchingFn(setPhase);
  })
  howlMap["beep"] = new Howl({
    src: [process.env.PUBLIC_URL + "sounds/beep.wav"],
  })
  howlMap["bubble"] = new Howl({
    src: [process.env.PUBLIC_URL + "sounds/bubble.wav"],
  })

  initialized = true
}

export function loopMainMusic() {
  howlMap["music"].play()
}

// function playBeepSound() {
//   howlMap["beep"].play()
// }

// function musicTick() {
//   currentTick += 1
//   // onBeforeTick(currentTick)
//   switch(currentPhase) {
//     case "playback":
//       handlePlaybackPhase(currentTick)
//     case "input":
//       break;
//   }
//   // onAfterTick(currentTick)
// }

// function handlePlaybackPhase(count) {
//   if(currentPattern[count - 1]) {
//     playBeepSound()
//   }
// }

export function playBubbleSound() {
  howlMap["bubble"].play();
}

export function syncPattern(pattern) {
  currentPattern = pattern
}

export function syncPhase(phase) {
  currentPhase = phase
  currentTick = 0
}
