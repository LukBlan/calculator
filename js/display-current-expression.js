(function displayCurrentExpression() {
  // Cache DOM
  const currentOperationDisplay = document.querySelector(".current-operation-display");

  // Subscribe Event
  pubSub.subscribe("displayEqualExpression", render);

  function render(currentExpression) {
    currentOperationDisplay.innerText = getExpression(currentExpression);
  }

  function getExpression(currentExpression) {
    let expression = currentExpression.leftNumber;

    if (currentExpression.currentOperator !== null) {
      expression += ` ${currentExpression.currentOperator}`
    }

    if (currentExpression.rightNumber !== "") {
      expression += ` ${currentExpression.rightNumber}`
    }

    if (currentExpression.finished) {
      expression += " =";
    }

    return expression;
  }
})()