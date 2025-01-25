const DIFF = 100;
const tapRegistry = []
let tapRegistryIndex = 0;

export function register(time, index) {
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

export function judge(elapsedTime, registeredTimeArray) {
  for (let i = 0; i < registeredTimeArray.length; i++) {
    if (Math.abs(elapsedTime - registeredTimeArray[i]) < DIFF) {
      return true
    }
  }
  return false
}
