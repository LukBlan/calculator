(function calculatorButtons() {
  //Cache DOM
  const allButtons = Array.from(document.getElementsByTagName("button"));

  // Bind Event
  document.body.addEventListener("mouseup", triggerButtonOnClick);
  window.addEventListener("keyup", triggerButtonOnKeyPressed);
  document.body.addEventListener("mousedown", addActiveOnMouseDown);
  window.addEventListener("keydown", addActiveOnKeyDown);

  pubSub.subscribe("applyEffect", applyEffect);
  pubSub.subscribe("addActive", addActive);

  function addActiveOnMouseDown(event) {
    if (event.target.nodeName === "BUTTON") {
      const keyPressed = event.target.innerText;
      pubSub.emit("keyDown", keyPressed);
    }
  }

  function addActiveOnKeyDown(event) {
    pubSub.emit("keyDown", event.key);
  }

  function addActive(key) {
    const element = allButtons.filter(button => button.innerText === key)[0];
    element.classList.add("active");
  }

  function applyEffect(key) {
    const element = allButtons.filter(button => button.innerText === key)[0];
    element.classList.remove("active")
    element.blur();
    playSound();
  }

  function playSound() {
    let audio = new Audio('./sounds/key-sound.mp3');
    audio.play()
  }

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