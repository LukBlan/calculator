(function displayCurrenNumber() {
  // Cache DOM
  const currentNumberDisplay = document.querySelector(".current-number-display");
  let currentNumber = "0"
  let newNumberEntry = false;

  // Subscribe Event
  pubSub.subscribe("newNumber", displayNewNumber);
  pubSub.subscribe("deleteLastNumber", deleteLastNumber);
  pubSub.subscribe("clearDisplay", clearDisplay);
  pubSub.subscribe("addDot", addDot);
  pubSub.subscribe("computeMinusOperator", computeMinusOperator);
  pubSub.subscribe("newResult", displayResult);

  function displayResult(result) {
    currentNumber = result;
    newNumberEntry = true;
    render();
  }

  function computeMinusOperator(minusSign) {
    if (currentNumber === "0" || newNumberEntry) {
      currentNumber = minusSign;
      newNumberEntry = false;
      render();
    } else {
      pubSub.emit("addOperator", minusSign);
    }
  }

  function addDot() {
    if (currentNumber.indexOf(".") === -1) {
      currentNumber += ".";
    }
    render();
  }

  function clearDisplay() {
    currentNumber = "0";
    pubSub.emit("resetExpression", null);
    render();
  }

  function deleteLastNumber() {
    currentNumber = (currentNumber.length < 2)? "0": currentNumber.substring(0, currentNumber.length - 1);
    render();
  }

  function displayNewNumber(newNumber) {
    currentNumber = (currentNumber === "0" || newNumberEntry)? newNumber: currentNumber + newNumber;
    newNumberEntry = false;
    pubSub.emit("setNewNumber", currentNumber);
    render();
  }

  function render() {
    currentNumberDisplay.innerText = currentNumber;
  }
})()