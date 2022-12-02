let currentOperation = "";
let currentNumber = "0"

addEventToNumberButtons();
addEventToClearButton();
addEventToDeleteButton();
addEventToOperators();
addEventToEqualButton();

function displayCurrentOperation() {
  const calculatorDisplay = document.getElementById("currentOperation");
  calculatorDisplay.innerText = currentOperation;
  currentNumber = "0"
  displayCurrentNumber()
}

function displayCurrentNumber() {
  const calculatorDisplay = document.getElementById("currentNumber");
  calculatorDisplay.innerText = currentNumber;
}

function evaluate(expression) {
  let result;
  let leftFactor;
  let rightFactor;
  let arrayExpression;
  if(expression.includes("+")) {
    arrayExpression = expression.split("+");
    leftFactor = arrayExpression[0];
    rightFactor = arrayExpression[1]
    result = Number(leftFactor) + Number(rightFactor);
  } else if (expression.includes("-")) {
    arrayExpression = expression.split("-");
    leftFactor = arrayExpression[0];
    rightFactor = arrayExpression[1]
    result = Number(leftFactor) - Number(rightFactor);
  } else if (expression.includes("x")) {
    arrayExpression = expression.split("x");
    leftFactor = arrayExpression[0];
    rightFactor = arrayExpression[1]
    result = Number(leftFactor) * Number(rightFactor);
  } else if (expression.includes("/")) {
    arrayExpression = expression.split("/");
    leftFactor = arrayExpression[0];
    rightFactor = arrayExpression[1]
    result = Number(leftFactor) / Number(rightFactor);
  }
  return result;
}

function addEventToNumberButtons() {
  const allParagraph = Array.from(document.getElementsByClassName("number"));
  allParagraph.forEach(element => element.parentElement.addEventListener("click", pressButton))
}

function pressButton(event) {
  let numberPressed = event.target.firstChild.textContent;
  if(currentNumber.length === 1 && currentNumber === "0") {
    currentNumber = numberPressed;
  } else {
    currentNumber += numberPressed;
  }
  displayCurrentNumber()
}

function addEventToClearButton() {
  const clearButton = document.getElementById("clear-button");
  clearButton.addEventListener("click", clearOperations);
}

function clearOperations() {
  currentOperation = "0";
  currentNumber = "0";
  displayCurrentOperation();
}

function addEventToDeleteButton() {
  const clearButton = document.getElementById("delete-button");
  clearButton.addEventListener("click", deleteLastNumber);
}

function deleteLastNumber() {
  if (currentNumber.length === 1 && currentNumber !== "0") {
    currentNumber = "0"
  }

  if (currentNumber.length > 1) {
    currentNumber = currentNumber.substring(0, currentNumber.length - 1);
  }
  displayCurrentNumber();
}

function addEventToOperators() {
  const operation = document.getElementsByClassName("operation");
  Array.from(operation).forEach(element => element.addEventListener("click", addOperation))
}

function addOperation(event) {
  const operationsOptions = ["+", "-", "/", "x"];
  let currentExpressionHaveOperator = false;
  operationsOptions.forEach(operator => {
    currentExpressionHaveOperator = currentExpressionHaveOperator || currentOperation.includes(operator);
  })
  if (!currentExpressionHaveOperator) {
    const operator = event.target.firstChild.textContent;
    currentOperation += currentNumber + " " +  operator + " ";
  }
  displayCurrentOperation();
}

function addEventToEqualButton() {
  let equalButton = document.getElementById("equal-button");
  equalButton.addEventListener("click", computeResult);
}

function computeResult() {
  const calculatorDisplay = document.getElementById("currentOperation");
  const calculatorNumber = document.getElementById("currentNumber");
  currentOperation += currentNumber
  let result =  evaluate(currentOperation);
  currentOperation += " =";
  calculatorDisplay.innerText = currentOperation;
  calculatorNumber.innerText = result.toString();
  currentNumber = result.toString();
  currentOperation = "";
}