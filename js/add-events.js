let functions = {
  "-": function (event) {
    expression.addMinusSign(event);
    expression.displayNumber();
  },

  "number": function (event) {
    expression.changeNumber(event);
    expression.displayNumber();
  },

  ".": function (event) {
    expression.addDotToNumber(event);
    expression.displayNumber();
  },

  "=": function () {
    if(!expression.currenNumberIsAnSpecialCharacter()) {
      expression.completed = true;
      expression.chainedOperator = null;
      expression.displayResult();
      expression.displayNumber();
    }
  },

  "Delete": function () {
    expression.deleteLastNumber();
    expression.displayNumber();
  },

  "Clear": function () {
    expression.resetExpression();
    expression.changeToNoneOperatorDisplay();
    expression.displayNumber();
  },

  "other": function () {
  },
}

functions["operator"] = functions["+"] = functions["/"] = functions["x"] = function (event) {
  expression.addOperator(event);
  expression.displayNumber();
}

function addEventToNumbersButtons() {
  const numbersButtons = Array.from(document.getElementsByClassName("number"));
  numbersButtons.forEach(element => element.addEventListener("click", functions["number"]));
}

function addEventToClearButton() {
  const clearButton = document.getElementById("clear-button");
  clearButton.addEventListener("click", functions["Clear"]);
}

function addEventToDeleteButton() {
  const deleteButton = document.getElementById("delete-button");
  deleteButton.addEventListener("click", functions["Delete"]);
}

function addEventToEqualButton() {
  let equalButton = document.getElementById("equal-button");
  equalButton.addEventListener("click", functions["="]);
}

function addEventToMinusButton() {
  let minusButton = document.getElementById("minusOperation");
  minusButton.addEventListener("click", functions["-"]);
}

function addEventToOperatorsButtons() {
  const operationsButtons = document.getElementsByClassName("operation");
  Array.from(operationsButtons).forEach(element => element.addEventListener("click", functions["operator"]));
}

function addEventToDotButton() {
  const dotButton = document.getElementById("dot");
  dotButton.addEventListener("click", functions["."]);
}

function addEventToKeyPressed() {
  window.addEventListener("keydown", (event) => {
    let mappedKey = mappingKeys[event.key];
    let keyType = (mappedKey !== undefined)? mappedKey : "other";
    functions[keyType](event);
  })
}

function maxSizeDisplayError() {
  let display = document.getElementById("display");
  let displayHeight = display.offsetHeight;
  if (displayHeight > 95) {
    expression.resetExpression()
    expression.changeToNoneOperatorDisplay()
    expression.displayError()
    expression.displayNumber()
  }
}

function getElementByKeyPressed(event) {
  const key = (event.type === "click")? event.target.textContent: event.key;
  let keyMapped = mappingKeys[key];
  let element = null;
  if (keyMapped !== undefined) {
    const keyButtons = document.querySelectorAll("button");
    const keyPressed =  (keyMapped === "number")? key : keyMapped;
    element = Array.from(keyButtons).filter(keyButton => keyButton.textContent === keyPressed)[0];
  }
  return element
}

function addEffectToButtonDown(eventType) {
  window.addEventListener(eventType, (event) => {
    let element = getElementByKeyPressed(event);
    if(element !== null) {
      element.classList.add("active");
    }
  })
}

function addEffectToButtonUp() {
  window.addEventListener("transitionend", () => {
    let element = document.querySelector(".active");
    if(element !== null) {
      expression.playSound();
      element.classList.remove("active");
    }
  })
}

function addEventToRemoveFocusOnButtons() {
  const buttons = document.querySelectorAll("button");
  buttons.forEach(button => button.addEventListener("focus", button.blur))
}

let mappingKeys =  {
  "0": "number",
  "1": "number",
  "2": "number",
  "3": "number",
  "4": "number",
  "5": "number",
  "6": "number",
  "7": "number",
  "8": "number",
  "9": "number",
  "-": "-",
  "x": "x",
  "*": "x",
  "+": "+",
  "Enter": "=",
  "=": "=",
  ".": ".",
  "Backspace": "Delete",
  "Delete": "Delete",
  " ": "Clear",
  "Clear": "Clear",
  "/": "/",
}