(function displayCurrentExpression() {
  // Cache DOM
  const currentOperationDisplay = document.querySelector(".current-operation-display");
  let currentNumber = "";

  // Subscribe Event
  pubSub.subscribe("displayExpression", displayExpression);
  pubSub.subscribe("resetExpression", resetExpression);

  function resetExpression() {
    currentNumber = "";
    render();
  }

  function displayExpression(number) {
    currentNumber = number;
    render();
  }

  function render() {
    currentOperationDisplay.innerText = getExpression();
  }

  function getExpression() {
    let expression = currentNumber;
    if (currentNumber !== "") {
      expression += " =";
    }
    return expression;
  }
})()