let baseTime;
export function resetBaseTime() {
  baseTime = Date.now();
  console.log("basetime: " + baseTime);
}

export function getBaseTIme() {
  return baseTime;
}

export function getElapsedTime() {
  return Date.now() - baseTime;
}