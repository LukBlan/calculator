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
    expression.displayResult();
    expression.displayNumber();
  });
}

/*
function addEventToOperators() {
  const operation = document.getElementsByClassName("operation");
  Array.from(operation).forEach(element => element.addEventListener("click", addOperation))
}

function addEventToMinus() {
  let equalButton = document.getElementById("minusOperation");
  equalButton.addEventListener("click", (event) => {
    if (currentNumber === "0" || currentNumber === "Error") {
      currentNumber = "-"
      displayCurrentNumber();
    } else if (currentNumber === "-")  {
      // Do Nothing
    } else {
      addOperation(event);
    }
  })
}
*/