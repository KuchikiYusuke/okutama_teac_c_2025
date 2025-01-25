import { Howl } from "howler";

const howlMap = {}
let initialized = false

export function initSounds() {
  if(initialized) {
    return
  }
  howlMap["music"] = new Howl({
    src: [process.env.PUBLIC_URL + "sounds/bgm1.wav"],
    loop: true,
  });
  initialized = true
}

export function loopMainMusic() {
  howlMap["music"].play()
}
