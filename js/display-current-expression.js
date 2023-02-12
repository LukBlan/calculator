(function displayCurrentExpression() {
  // Cache DOM
  const currentOperationDisplay = document.querySelector(".current-operation-display");

  // Subscribe Event
  pubSub.subscribe("displayEqualExpression", render);

  function render(currentExpression) {
    currentOperationDisplay.innerText = getExpression(currentExpression);
  }

  function getExpression(currentExpression) {
    let expression = (currentExpression.leftNumber.length > 21)?
      Number(currentExpression.leftNumber).toExponential().toString() : currentExpression.leftNumber;

    if (currentExpression.currentOperator !== null) {
      expression += ` ${currentExpression.currentOperator}`
    }

    if (currentExpression.rightNumber !== "") {
      let rightNumber = (currentExpression.rightNumber.length > 21)?
        Number(currentExpression.rightNumber).toExponential().toString() : currentExpression.rightNumber;
      expression += ` ${rightNumber}`
    }

    if (currentExpression.finished) {
      expression += " =";
    }

    return expression;
  }
})()