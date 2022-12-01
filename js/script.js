let currentOperation = "0";

addEventToNumberButtons()

function displayCurrentOperation() {
  const calculatorDisplay = document.getElementById("currentNumber");
  calculatorDisplay.innerText = currentOperation;
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
  }
  return result;
}

function addEventToNumberButtons() {
  const allParagraph = Array.from(document.getElementsByClassName("number"));
  allParagraph.forEach(element => element.parentElement.addEventListener("click", pressButton))
}

function pressButton(event) {
  let numberPressed = event.target.firstChild.textContent;
  if(currentOperation.length === 1 && currentOperation === "0") {
    currentOperation = numberPressed;
  } else {
    currentOperation += numberPressed;
  }

  displayCurrentOperation()
}