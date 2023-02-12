(function displayCurrenNumber() {
  // Cache DOM
  const currentNumberDisplay = document.querySelector(".current-number-display");

  // Subscribe Event
  pubSub.subscribe("displayNewNumber", render);
  pubSub.subscribe("errorDetected", displayError);

  function displayError() {
    render("Error");
  }

  function render(newNumber) {
    let numberToDisplay = newNumber;
    if (newNumber.length > 100) {
      throw new Error("Infinity Number");
    }
    if (numberToDisplay.length > 21) {
      numberToDisplay = Number(numberToDisplay).toExponential().toString();
    }
    currentNumberDisplay.innerText = numberToDisplay;
  }
})()