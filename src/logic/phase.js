export const IMITATION = "imitation"
export const REGISTER = "register"

let phase = "register"; // "imitation" or "register"
let imitationNum = 0;
let presentImitationNum = 0;
let playerCount = 0;

export function getPhase() {
  return phase;
}

export function getIsFirstImitaionPhase() {
  return phase === IMITATION && presentImitationNum === 0
}

export function handlePhase(setPhase, setUraimoriIndex) {
  console.log("presentImitationNum: " + presentImitationNum)
  if (phase === IMITATION) {
    if (presentImitationNum < imitationNum - 1) { // IMITATIONが続く
      presentImitationNum += 1;
    } else { // IMITATIONが終わる
      phase = REGISTER
      presentImitationNum += 1;
      setPhase(phase);
    }
  } else { // REGISTER -> IMITATION
    console.log("uraimoriIndex: " + playerCount % 4)
    setUraimoriIndex(playerCount % 4);
    phase = IMITATION
    presentImitationNum = 0;
    imitationNum += 1;
    setPhase(phase);
    playerCount += 1;
  }
  console.log(phase);
}

export function getPresentImitationNum() {
  return presentImitationNum
}