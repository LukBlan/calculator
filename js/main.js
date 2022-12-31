addEventToNumbersButtons();
addEventToClearButton();
addEventToDeleteButton();
addEventToEqualButton();
addEventToMinusButton();
addEventToOperatorsButtons();
addEventToDotButton();
addEventToKeyPressed();
window.addEventListener("keyup", maxSizeDisplayError);
window.addEventListener("click", maxSizeDisplayError);
addEffectToButtonDown("keydown");
addEffectToButtonUp("keyup");
addEventToRemoveFocusOnButtons();

