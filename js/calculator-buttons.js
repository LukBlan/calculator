(function calculatorButtons() {
  //Cache DOM
  const allButtons = Array.from(document.getElementsByTagName("button"));

  // Bind Event
  document.body.addEventListener("click", triggerButtonOnClick);
  window.addEventListener("keydown", triggerButtonOnKeyPressed);

  pubSub.subscribe("applyEffect", applyEffect);

  function applyEffect(key) {
    const element = allButtons.filter(button => button.innerText === key)[0];
    element.classList.add("active");
    setTimeout(() => {
      element.classList.remove("active")
      element.blur();
    }, 100);
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