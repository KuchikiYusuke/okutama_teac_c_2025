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
export function initSounds(handlePhase, setPhase, resetBaseTime, isMusicPause, setActive, setUraimoriIndex) {
  if(initialized) {
    return
  }
  // onBeforeTick = onBeforeTickFn
  // onAfterTick = onAfterTickFn
  howlMap["music"] = new Howl({
    src: [process.env.PUBLIC_URL + "/sounds/ggj2025_teamc_bgm_1.wav"],
    loop: true,
  });
  howlMap["music"].on("play", () => {
    playBeepSound();
    resetBaseTime();
    if(ticking) {
      return;
    }
    // musicTick()
    // setInterval(musicTick, 500)
    ticking = true;
  })
  howlMap["music"].on("end", () => {
    handlePhase(setPhase, setUraimoriIndex);
    resetBaseTime();
    isMusicPause() && howlMap["music"].pause();
    isMusicPause() && setActive("pause");
  })
  howlMap["beep"] = new Howl({
    src: [process.env.PUBLIC_URL + "/sounds/beep.wav"],
  })
  howlMap["bubble"] = new Howl({
    src: [process.env.PUBLIC_URL + "/sounds/se_bubble_01.wav"],
  })
  howlMap["OK"] = new Howl({
    src: [process.env.PUBLIC_URL + "/sounds/voice_success_01.wav"],
  })
  howlMap["NG"] = new Howl({
    src: [process.env.PUBLIC_URL + "/sounds/voice_failed_01.wav"],
  })

  initialized = true
}

export function loopMainMusic() {
  howlMap["music"].play()
}

function playBeepSound() {
  howlMap["beep"].play()
}

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

export function playOKSound() {
  const howl = howlMap["OK"];
  const id = howl.play();
  howl.rate(0.9 + Math.random() * 0.2, id)
}

export function playNGSound() {
  const howl = howlMap["NG"];
  const id = howl.play();
  howl.rate(0.9 + Math.random() * 0.2, id)
}

