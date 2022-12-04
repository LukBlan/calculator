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
    if(expression[expression.getCurrentNumber()] !== "-") {
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

/*
function addEventToOperators() {
  const operation = document.getElementsByClassName("operation");
  Array.from(operation).forEach(element => element.addEventListener("click", addOperation))
}
*/