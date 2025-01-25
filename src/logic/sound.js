import { Howl } from "howler";

const howlMap = {}
let initialized = false
let ticking = false;

export function initSounds() {
  if(initialized) {
    return
  }
  howlMap["music"] = new Howl({
    src: [process.env.PUBLIC_URL + "sounds/bgm1.wav"],
    loop: true,
  });
  howlMap["music"].on("play", () => {
    if(ticking) {
      return;
    }
    setInterval(musicTick, 500)
    ticking = true;
  })
  howlMap["beep"] = new Howl({
    src: [process.env.PUBLIC_URL + "sounds/beep.wav"],
  })

  initialized = true
}

export function loopMainMusic() {
  howlMap["music"].play()
}

function musicTick() {
  howlMap["beep"].play()
}
