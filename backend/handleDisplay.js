import { STATE } from "./state.js";
import format from "./format.js";

export default function handleDisplay() {
  if (STATE.isError) {
    return
  }

  const mainDisplay = document.querySelector(".display-main");

  if (!STATE.operation) {
    // If there is no saved operator, then the change is done on first operand:
    mainDisplay.textContent = format(STATE.valueOne);
  }
  else if (STATE.operation && !STATE.postOperation) {
    // If there is a saved operator, but it is not post operation
    // It means we are changing the second operand
    mainDisplay.textContent = format(STATE.valueTwo);
  }
  else if (STATE.operation && STATE.postOperation) {
    // If there is a saved operation and it is post Operation
    console.log(typeof STATE.valueOne);
    mainDisplay.textContent = format(STATE.valueOne);
  }
}
