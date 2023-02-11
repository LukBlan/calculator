(function calculatorButtons() {
  // Cache DOM
  const calculator = document.body;

  // Bind Event
  calculator.addEventListener("click", triggerButtonOnClick);
  addEventListener("keydown", triggerButtonOnKeyPressed);

  function triggerButtonOnClick(event) {
    if (event.target.nodeName === "BUTTON") {
      const keyPressed = event.target.innerText;
      pubSub.emit("keyPressed", keyPressed);
    }
  }

  function triggerButtonOnKeyPressed(event) {
    pubSub.emit("keyPressed", event.key);
  }
})()