let expression = {
  leftNumber: "0",
  operator: null,
  rightNumber: "0",

  getCurrentNumber() {
    return this.operator === null? "leftNumber": "rightNumber";
  },

  displayNumber() {
    const calculatorDisplay = document.getElementById("number-display");
    calculatorDisplay.innerText = this[this.getCurrentNumber()];
  },

  changeNumber(event) {
    let newNumber = event.target.firstChild.textContent;
    if (this[this.getCurrentNumber()] === "0") {
      this[this.getCurrentNumber()] = newNumber;
    } else {
      this[this.getCurrentNumber()] += newNumber;
    }
  },

  resetExpression() {
    this.leftNumber = "0";
    this.operator = null;
    this.rightNumber = "0";
  }
}

/*
function displayCurrentOperation() {
  const calculatorDisplay = document.getElementById("currentOperation");
  calculatorDisplay.innerText = currentOperation;
  currentNumber = "0"
  displayCurrentNumber()
}

function clearOperations() {
  currentOperation = "None";
  currentNumber = "0";
  displayCurrentOperation();
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

function addOperation(event) {
  const operationsOptions = ["+", "-", "/", "x"];
  let currentExpressionHaveOperator = false;
  operationsOptions.forEach(operator => {
    currentExpressionHaveOperator = currentExpressionHaveOperator || currentOperation.includes(operator);
  })
  if (!currentExpressionHaveOperator) {
    const operator = event.target.firstChild.textContent;
    if(currentOperation === "None") {
      currentOperation = currentNumber + " " +  operator + " ";
    } else {
      currentOperation += currentNumber + " " +  operator + " ";
    }

  }
  displayCurrentOperation();
}

function computeResult() {
  if(currentNumber === "Error" || currentNumber === "None") {
    currentNumber = "0";
    displayCurrentNumber();
  } else {
    const calculatorDisplay = document.getElementById("currentOperation");
    const calculatorNumber = document.getElementById("currentNumber");
    if (currentOperation === "None") {
      currentOperation = "";
    }
    currentOperation += currentNumber
    let result =  evaluate(currentOperation);
    currentOperation += " =";
    calculatorDisplay.innerText = currentOperation;
    calculatorNumber.innerText = result.toString();
    currentNumber = result.toString();
    currentOperation = "";
  }
}

function evaluate(expression) {
  let expressionComponents = expression.split(" ");
  let result = expression;
  let leftFactor = expressionComponents[0];
  let rightFactor = expressionComponents[2];
  let operator = expressionComponents[1];

  if(operator === "+") {
    result = Number(leftFactor) + Number(rightFactor);
  } else if (operator === "-") {
    result = Number(leftFactor) - Number(rightFactor);
  } else if (operator === "x") {
    result = Number(leftFactor) * Number(rightFactor);
  } else if (operator === "/") {
    if (rightFactor === "0") {
      result = "Error";
    } else {
      result = Number(leftFactor) / Number(rightFactor);
    }
  }
  return result;
}
 */