(function displayCurrentExpression() {
  let currenExpression = {
    leftNumber: "0",
    rightNumber: "",
    currentOperator: null,
    finished: false,
    newInput: false,
    disableOperators: false,
    currentValue: function () {return currenExpression[returnActiveNumber()];},
  }

  // Subscribe Event
  pubSub.subscribe("addNewNumber", addNewNumber);
  pubSub.subscribe("cleanExpression", cleanExpression);
  pubSub.subscribe("deleteLastNumber", deleteLastNumber);
  pubSub.subscribe("addDotToNumber", addDotToNumber);
  pubSub.subscribe("equalPressed", displayEqualResult);
  pubSub.subscribe("addOperator", addOperator);
  pubSub.subscribe("addSubtractOperator", addSubtractOperator);
  pubSub.subscribe("errorDetected", displayError);

  function displayError() {
    currenExpression.leftNumber = "";
    currenExpression.rightNumber = "";
    currenExpression.currentOperator = null;
    currenExpression.finished = false;
    currenExpression.newInput = false;
    currenExpression.disableOperators = true;
    emitNewExpression();
    currenExpression.leftNumber = "0";
  }

  function addSubtractOperator(subtractOperator) {
    if (currenExpression.currentValue() === "0") {
      currenExpression[returnActiveNumber()] = "-";
      emitNewNumber(currenExpression.currentValue());
      currenExpression.disableOperators = true;
    } else {
        addOperator(subtractOperator);
      }
  }

  function addOperator(operatorSign) {
    if (!currenExpression.disableOperators) {
      if (currenExpression.currentOperator === null) {
        currenExpression.currentOperator = operatorSign;
      } else {
        currenExpression.leftNumber = computeResultObject.getResult(currenExpression);
        currenExpression.rightNumber = "";
      }
      currenExpression.finished = false;
      emitNewNumber("0");
      emitNewExpression();
      currenExpression.rightNumber = "0";
      currenExpression.currentOperator = operatorSign;
      currenExpression.disableOperators = false;
    }
  }

  function displayEqualResult() {
    if (!currenExpression.disableOperators) {
      let result = computeResultObject.getResult(currenExpression)
      currenExpression.finished = true;
      emitNewNumber(result);
      emitNewExpression();
      currenExpression.currentOperator = null;
      currenExpression.finished = true;
      currenExpression.leftNumber = result;
      currenExpression.newInput = true;
      currenExpression.rightNumber = "";
    }
  }

  function addDotToNumber() {
    const currentValue = currenExpression.currentValue();
    if (currentValue.indexOf(".") === -1) {
      currenExpression[returnActiveNumber()] += ".";
      emitNewNumber(currenExpression.currentValue());
    }
  }

  function cleanExpression() {
    currenExpression.currentOperator = null;
    currenExpression.finished = false;
    currenExpression.rightNumber = "";
    currenExpression.leftNumber = "0";
    emitNewNumber("0")
    currenExpression.leftNumber = "";
    emitNewExpression()
    currenExpression.leftNumber = "0";
    currenExpression.newInput = false;
    currenExpression.disableOperators = false;
  }

  function deleteLastNumber() {
    if(currenExpression.currentValue() === "-") {
      currenExpression.disableOperators = false;
    }
    const currentValue = currenExpression.currentValue();
    currenExpression[returnActiveNumber()] = (currentValue.length < 2)? "0":
      currentValue.substring(0, currentValue.length - 1);
    emitNewNumber(currenExpression.currentValue())

  }

  function addNewNumber(newNumber) {
    let currentValue = currenExpression.currentValue();
    currenExpression[returnActiveNumber()] = (currentValue === "0" || currenExpression.newInput)?
      newNumber: currentValue + newNumber;
    currenExpression.newInput = false;
    currenExpression.disableOperators = false;
    emitNewNumber(currenExpression.currentValue())
  }

  function emitNewNumber(newNumber) {
    pubSub.emit("displayNewNumber", newNumber);
  }

  function emitNewExpression() {
    pubSub.emit("displayEqualExpression", currenExpression);
  }

  function returnActiveNumber() {
    return (currenExpression.currentOperator === null)? "leftNumber": "rightNumber";
  }
})()