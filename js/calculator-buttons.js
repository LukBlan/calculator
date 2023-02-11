(function calculatorButtons() {
  // Bind Event
  document.body.addEventListener("click", triggerButtonOnClick);
  window.addEventListener("keydown", triggerButtonOnKeyPressed);

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