import { STATE } from "./state.js";
import handleDisplay from "./handleDisplay.js";

function clearAll() {
  STATE._total = 0;
  STATE._memoryTotal = 0;
  STATE._valueOne = 0;
  STATE._valueTwo = 0;
  STATE._operation = null;
  STATE._lastKey = 'clear all';
  STATE._isPowered = true;

  const mainDisplay = document.querySelector('.display-main');

  mainDisplay.textContent = "CLEAR";
  setTimeout(() => {
    mainDisplay.textContent = 0;
  }, 750);
  console.log(STATE);
}

function clearMemory() {
  STATE._memoryTotal = "0";
  STATE._lastKey = 'memory clear';
}

function recallMemory() {
  // If there is an operation stored in memory, modify valueTwo,
  // else modify valueOne
  const name = STATE._operation ? "_valueTwo" : "_valueOne"
  STATE[name] = STATE._memoryTotal;
  handleDisplay("_memoryTotal")

  STATE._lastKey = 'memory recall';
  console.log(STATE);
}

function memPlus() {
  if (STATE._error) return;

  const mainDisplay = document.querySelector('.display-main');

  STATE._memoryTotal = (parseFloat(STATE._memoryTotal) + parseFloat(mainDisplay.textContent)).toString();

  STATE.overwrite = true;
  STATE._lastKey = 'memory plus';
  console.log(STATE);
}

function memSubtract() {
  const mainDisplay = document.querySelector('.display-main');

  STATE.memoryTotal = (parseFloat(STATE.memoryTotal) - parseFloat(mainDisplay.textContent)).toString();

  STATE.overwrite = true;
  STATE._lastKey = 'memory subtract';
  console.log(STATE);
}

export { clearAll, recallMemory, memPlus, memSubtract, clearMemory }