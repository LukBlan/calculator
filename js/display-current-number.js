(function displayCurrenNumber() {
  // Cache DOM
  const currentNumberDisplay = document.querySelector(".current-number-display");

  // Subscribe Event
  pubSub.subscribe("displayNewNumber", render);

  function render(newNumber) {
    currentNumberDisplay.innerText = newNumber;
  }
})()