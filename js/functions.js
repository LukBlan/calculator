let expression = {
  leftNumber: "0",
  operator: null,
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
    let newNumber = event.target.firstChild.textContent;
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
      if (this.rightNumber[this.rightNumber.length -1] === "0") {
        result = "Error";
      } else {
        result = Number(this.leftNumber) / Number(this.rightNumber);
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

  currentNumberIsNotOnlyAMinusSign() {
    return this[this.getCurrentNumber()] !== "-";
  },

  addOperator(event) {
    if (!this.currenNumberIsAnSpecialCharacter()) {
      this.operator = event.target.firstChild.textContent;
      this.displayOperation();
    }
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

  addDotToNumber(event) {
    if(!this[this.getCurrentNumber()].includes(".")) {
      this.changeNumber(event);
    }
  }
}