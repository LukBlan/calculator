(function displayCurrentExpression() {
  // Cache DOM
  const currentOperationDisplay = document.querySelector(".current-operation-display");
  let leftNumber = "0";
  let rightNumber = "";
  let currentOperator = null;
  let expressionFinished = false;

  // Subscribe Event
  pubSub.subscribe("resetExpression", resetExpression);
  pubSub.subscribe("addOperator", addOperator)
  pubSub.subscribe("setNewNumber", setNumber)
  pubSub.subscribe("displayResult", displayResult);

  function displayResult() {
    const result = computeResultObject.getResult(leftNumber, currentOperator, rightNumber);
    pubSub.emit("newResult", result);
    expressionFinished = true;
    render();
  }

  function addOperator(operatorSign) {
    if (currentOperator === null) {
      currentOperator = operatorSign;
      pubSub.emit("newResult", "0");
    } else {
      leftNumber = computeResultObject.getResult(leftNumber, currentOperator, rightNumber);
      currentOperator = operatorSign;
      expressionFinished = false;
      pubSub.emit("newResult", (rightNumber === "-")? "-": "0");
      rightNumber = "";
    }
    render();
    rightNumber = "0";
  }

  function resetExpression() {
    leftNumber = "";
    rightNumber = "";
    currentOperator = null;
    expressionFinished = false;
    render();
    pubSub.emit("newResult", "0");
    leftNumber = "0";
  }

  function setNumber(number) {
    if (currentOperator === null) {
      leftNumber = number;
    } else {
      rightNumber = number;
    }
  }

  function render() {
    currentOperationDisplay.innerText = getExpression();
  }

  function getExpression() {
    let expression = leftNumber;

    if (currentOperator !== null) {
      expression += ` ${currentOperator}`
    }

    if (rightNumber !== "") {
      expression += ` ${rightNumber}`
    }

    if (expressionFinished) {
      expression += " =";
    }

    return expression;
  }
})()