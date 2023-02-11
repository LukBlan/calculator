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
  pubSub.subscribe("displayResult", displayResult);

  function displayResult() {
    pubSub.emit("displayExpression", currentNumber);
    newNumberEntry = true;
    render();
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
    render();
  }

  function render() {
    currentNumberDisplay.innerText = currentNumber;
  }
})()