const IMITATION = "imitation"
const REGISTER = "register"

let phase = "register"; // "imitation" or "register"
let imitationNum = 0;
let tmpImitationNum = 0;

export function getPhase() {
  return phase;
}

export function handlePhase(setPhase) {

  if (phase === IMITATION) {
    if (tmpImitationNum < imitationNum - 1) { // IMITATIONが続く
      tmpImitationNum += 1;
    } else { // IMITATIONが終わる
      phase = REGISTER
      setPhase(phase)
    }
  } else { // REGISTER -> IMITATION
    phase = IMITATION
    tmpImitationNum = 0;
    imitationNum += 1;
    setPhase(phase)
  }
  console.log(phase);
}
