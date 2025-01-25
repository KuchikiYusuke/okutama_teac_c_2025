const DIFF = 500;

let registeredTime = 500;

export function tap(elapsedTimeInLoop) {
  judge(elapsedTimeInLoop);
}

function judge(tapTime) {
  console.log(tapTime - registeredTime);
  console.log(Math.abs(tapTime - registeredTime) < DIFF);
  return Math.abs(tapTime - registeredTime) < DIFF;
}

