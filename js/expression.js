let expression = {
  leftNumber: "0",
  operator: null,
  chainedOperator: null,
  rightNumber: "0",
  completed: false,

  getCurrentNumber() {
    return this.operator === null? "leftNumber": "rightNumber";
  },

  displayNumber() {
    const calculatorDisplay = document.getElementById("number-display");
    calculatorDisplay.innerText = this[this.getCurrentNumber()];
  },

  changeNumber(event) {
    let newNumber = event.key === undefined? event.target.firstChild.textContent: event.key;
    if (this[this.getCurrentNumber()] === "0" || this.currentNumberIsError()) {
      this[this.getCurrentNumber()] = newNumber;
    } else {
      this[this.getCurrentNumber()] += newNumber;
    }
  },

  changeToNoneOperatorDisplay() {
    const operatorDisplay = document.getElementById("operation-display");
    operatorDisplay.innerText = "None";
  },

  resetExpression() {
    this.leftNumber = "0";
    this.operator = null;
    this.rightNumber = "0";
    this.completed = false;
    this.chainedOperator = null;
  },

  deleteLastNumber() {
    if (this[this.getCurrentNumber()].length === 1 || this.currentNumberIsError()) {
      this[this.getCurrentNumber()] = "0";
    } else {
      this[this.getCurrentNumber()] =
        this[this.getCurrentNumber()].substring(0, this[this.getCurrentNumber()].length -1);
    }
  },

  displayOperation() {
    const operationDisplay = document.getElementById("operation-display");
    operationDisplay.innerText = this.getCurrentOperation();
  },

  getCurrentOperation() {
    let currentOperation = this.leftNumber;
    if (this.operator !== null) {
      currentOperation += ` ${this.operator}`;
    }
    if (this.chainedOperator !== null) {
      currentOperation += ` ${this.chainedOperator}`;
    }
    if (this.operator !== null && this.completed) {
      currentOperation += ` ${this.rightNumber}`;
    }
    if (this.completed) {
      currentOperation += ` =`;
    }
    return currentOperation;
  },

  displayResult() {
    let result = this.computeResult();
    this.displayOperation();
    this.resetExpression();
    this.leftNumber = result;
  },

  computeResult() {
    let result = this.leftNumber;
    if (this.operator === "+") {
      result = Number(this.leftNumber) + Number(this.rightNumber);
    } else if (this.operator === "-") {
      result = Number(this.leftNumber) - Number(this.rightNumber);
    } else if (this.operator === "x") {
      result = Number(this.leftNumber) * Number(this.rightNumber);
    } else if (this.operator === "/") {
      if (this.rightNumberCantBeDivided()) {
        result = Number(this.leftNumber) / Number(this.rightNumber);
      } else {
        result = "Error";
      }
    }
    return result;
  },

  addMinusSign() {
    if (this[this.getCurrentNumber()] === "0" || this.currentNumberIsError()) {
      this[this.getCurrentNumber()] = "-";
    } else if (this.currenNumberIsAnSpecialCharacter()) {
      // Do Nothing
    } else {
      this.operator = "-";
      this.displayOperation();
    }
  },

  addOperator(event) {
    if (!this.currenNumberIsAnSpecialCharacter()) {
      if (this.operator !== null) {
        this.displayResult();
        this.chainOperation(event);
        this.displayOperation();
        this.resetChainedOperation();
        expression.displayErrorInOperation();
      } else if (!this.currenNumberIsAnSpecialCharacter()) {
        this.operator =  event.key === undefined? event.target.firstChild.textContent: event.key;
        this.operator = this.operator === "*"? "x": this.operator;
        this.displayOperation();
      }
    }
  },

  chainOperation(event) {
    this.chainedOperator = (event.type === "click")? event.target.textContent: event.key;
    this.completed = false;
  },

  resetChainedOperation() {
    this.operator = this.chainedOperator;
    this.chainedOperator = null;
  },

  currentNumberIsError() {
    return this[this.getCurrentNumber()] === "Error";
  },

  currenNumberIsAnSpecialCharacter() {
    let specialCharacters = ["Error", ".", "-"];
    let currentNumberIsNot = false;
    specialCharacters.forEach(character => {
      currentNumberIsNot = currentNumberIsNot || character === this[this.getCurrentNumber()];
    })
    return currentNumberIsNot;
  },

  rightNumberCantBeDivided() {
    let canBeDivided = false;
    this.rightNumber.split("").forEach(character =>{
      canBeDivided = canBeDivided || !["-","0","."].includes(character);
    })
    return canBeDivided;
  },

  addDotToNumber(event) {
    if(!this[this.getCurrentNumber()].includes(".")) {
      this.changeNumber(event);
    }
  },

  playSound() {
    let audio = new Audio('./sounds/key-sound.mp3');
    audio.play();
  },

  displayError() {
    this[this.getCurrentNumber()] = "Error";
  },

  displayErrorInOperation() {
    if (this.leftNumber === "Error" || this.rightNumber === "Error") {
      this.resetExpression();
      this.changeToNoneOperatorDisplay();
      this.displayError();
    }
  }
}