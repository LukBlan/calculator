function addEventToNumbersButtons() {
  const numbersButtons = Array.from(document.getElementsByClassName("number"));
  numbersButtons.forEach(element => element.addEventListener("click", (event) => {
    expression.changeNumber(event);
    expression.displayNumber();
  }))
}

function addEventToClearButton() {
  const clearButton = document.getElementById("clear-button");
  clearButton.addEventListener("click", () => {
    expression.resetExpression();
    expression.changeToNoneOperatorDisplay();
    expression.displayNumber();
  });
}

function addEventToDeleteButton() {
  const deleteButton = document.getElementById("delete-button");
  deleteButton.addEventListener("click", () => {
    expression.deleteLastNumber();
    expression.displayNumber();
  });
}

function addEventToEqualButton() {
  let equalButton = document.getElementById("equal-button");
  equalButton.addEventListener("click", () => {
    if(!expression.currenNumberIsAnSpecialCharacter()) {
      expression.completed = true;
      expression.displayResult();
      expression.displayNumber();
    }
  });
}

function addEventToMinusButton() {
  let minusButton = document.getElementById("minusOperation");
  minusButton.addEventListener("click", () => {
    expression.addMinusSign();
    expression.displayNumber();
  })
}

function addEventToOperatorsButtons() {
  const operationsButtons = document.getElementsByClassName("operation");
  Array.from(operationsButtons).forEach(element => element.addEventListener("click", (event) => {
    expression.addOperator(event);
    expression.displayNumber();
  }))
}

function addEventToDotButton() {
  const dotButton = document.getElementById("dot");
  dotButton.addEventListener("click", (event) => {
    expression.addDotToNumber(event);
    expression.displayNumber();
  })
}

function addEventPlayKeySound() {
  const allRow = Array.from(document.querySelectorAll(".row div"));
  allRow.forEach(element => element.addEventListener("click", () => {
    expression.playSound();
  }))
}