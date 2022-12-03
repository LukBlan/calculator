let expression = {
  leftNumber: "0",
  operator: null,
  rightNumber: "0",

  getCurrentNumber() {
    return this.operator === null? "leftNumber": "rightNumber";
  },

  displayNumber() {
    const calculatorDisplay = document.getElementById("number-display");
    calculatorDisplay.innerText = this[this.getCurrentNumber()];
  },

  changeNumber(event) {
    let newNumber = event.target.firstChild.textContent;
    if (this[this.getCurrentNumber()] === "0") {
      this[this.getCurrentNumber()] = newNumber;
    } else {
      this[this.getCurrentNumber()] += newNumber;
    }
  },

  resetExpression() {
    const operatorDisplay = document.getElementById("operation-display");
    operatorDisplay.innerText = "None";
    this.leftNumber = "0";
    this.operator = null;
    this.rightNumber = "0";
  },

  deleteLastNumber() {
    if (this[this.getCurrentNumber()].length === 1) {
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
      currentOperation += ` ${this.operator} ${this.leftNumber}`;
    }
    currentOperation += " =";
    return currentOperation;
  },

  displayResult() {
    let result = this.computeResult();
    this.displayOperation();
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
      result = Number(this.leftNumber) / Number(this.rightNumber);
    }
    return result;
  }
}