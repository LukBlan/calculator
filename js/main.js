addEventToNumbersButtons();
addEventToClearButton();
addEventToDeleteButton();
addEventToEqualButton();
addEventToMinusButton();
addEventToOperatorsButtons();
addEventToDotButton();
addEventToKeyPressed();
window.addEventListener("keydown", maxSizeDisplayError);
window.addEventListener("click", maxSizeDisplayError);
addEffectToButtonDown("keydown");
addEffectToButtonDown("click");
addEffectToButtonUp("click");
addEventToRemoveFocusOnButtons();
