const DIFF = 500;
const tapRegistry = []
let tapRegistryIndex = 0;

export function tap(time, index) {
  console.log("index: " + index)
  console.log("tapRegistry.length: " + tapRegistry.length)
  if (index === tapRegistry.length) {
    tapRegistry.push([]);
  } 
  tapRegistry[index].push(time);
  tapRegistry.forEach((tap, i) => console.log("tap" + "_" + i + ": " + tap))
}

export function getTapRegistry() {
  return tapRegistry
}

export function getTapRegistryIndex() {
  return tapRegistryIndex;
}

export function judge(elapsedTimeInLoop, registeredTimeArray) {
  registeredTimeArray.forEach(
    (registeredTime) => {
      console.log(elapsedTimeInLoop - registeredTime);
      console.log(Math.abs(elapsedTimeInLoop - registeredTime) < DIFF);
      if (Math.abs(elapsedTimeInLoop - registeredTime) < DIFF) {
        return true
      } 
    }
  );
  return false
}
