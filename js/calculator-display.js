(function calculatorDisplay() {
  // Cache DOM
  const currentNumberDisplay = document.querySelector(".current-number-display");
  let currentNumber = "0"

  // Subscribe Event
  pubSub.subscribe("newNumber", displayNewNumber);
  pubSub.subscribe("deleteLastNumber", deleteLastNumber);
  pubSub.subscribe("clearDisplay", clearDisplay);
  pubSub.subscribe("addDot", addDot);

  function addDot() {
    if (currentNumber.indexOf(".") === -1) {
      currentNumber += ".";
    }
    render();
  }

  function clearDisplay() {
    currentNumber = "0";
    render();
  }

  function deleteLastNumber() {
    currentNumber = (currentNumber.length < 2)? "0": currentNumber.substring(0, currentNumber.length - 1);
    render();
  }

  function displayNewNumber(newNumber) {
    currentNumber = (currentNumber === "0")? newNumber: currentNumber + newNumber;
    render();
  }

  function render() {
    currentNumberDisplay.innerText = currentNumber;
  }
})()