let functions = {
  "-": function () {
    expression.addMinusSign();
    expression.displayNumber();
    expression.playSound();
  },

  "operator": function (event) {
    expression.addOperator(event);
    expression.displayNumber();
    expression.playSound();
  },

  "number": function (event) {
    expression.changeNumber(event);
    expression.displayNumber();
    expression.playSound();
  },

  ".": function (event) {
    expression.addDotToNumber(event);
    expression.displayNumber();
    expression.playSound();
  },

  "=": function () {
    if(!expression.currenNumberIsAnSpecialCharacter()) {
      expression.completed = true;
      expression.displayResult();
      expression.displayNumber();
      expression.playSound();
    }
  },

  "delete": function () {
    expression.deleteLastNumber();
    expression.displayNumber();
    expression.playSound();
  },

  "space": function () {
    expression.resetExpression();
    expression.changeToNoneOperatorDisplay();
    expression.displayNumber();
    expression.playSound();
  },

  "other": function () {
  }
}

function addEventToNumbersButtons() {
  const numbersButtons = Array.from(document.getElementsByClassName("number"));
  numbersButtons.forEach(element => element.addEventListener("click", functions["number"]));
}

function addEventToClearButton() {
  const clearButton = document.getElementById("clear-button");
  clearButton.addEventListener("click", functions["space"]);
}

function addEventToDeleteButton() {
  const deleteButton = document.getElementById("delete-button");
  deleteButton.addEventListener("click", functions["delete"]);
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

function addEventToKey() {
  window.addEventListener("keydown", (event) => {
    let keyType = event.key === "-"? "-":
                    event.key ===" "? "space":
                      event.key === "Backspace"? "delete":
                       event.key === "Enter"? "=":
                        event.key === "."? ".":
                          ["*", "+", "/", "x"].includes(event.key)? "operator":
                            ["0", "1", "2", "3","4","5", "6", "7", "8", "9"].includes(event.key)? "number": "other"
    functions[keyType](event);
  })
}

function maxSizeDisplayError() {
  let display = document.getElementById("display");
  let displayHeight = display.offsetHeight;
  console.log(displayHeight)
  if (displayHeight > 95) {
    expression.resetExpression()
    expression.changeToNoneOperatorDisplay()
    expression.displayError()
    expression.displayNumber()
  }
}