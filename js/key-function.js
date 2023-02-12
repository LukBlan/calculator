(function keyFunctions() {
  let functions = {
    "minus": function (minusSign) {
      pubSub.emit("addSubtractOperator", minusSign);
    },

    "number": function (number) {
      pubSub.emit("addNewNumber", number);
    },

    "dot": function () {
      pubSub.emit("addDotToNumber", null);
    },

    "equals": function () {
      pubSub.emit("equalPressed", null);
    },

    "delete": function () {
      pubSub.emit("deleteLastNumber", null);
    },

    "clear": function () {
      pubSub.emit("cleanExpression", null);
    },

    "operator": function (operatorSign) {
      pubSub.emit("addOperator", operatorSign);
    },

  }
  // Subscribe Event
  pubSub.subscribe("applyKeyFunction", applyKeyFunction);

  function applyKeyFunction(keyMapped) {
    try {
      functions[keyMapped.keyFunction](keyMapped.key)
    } catch (e) {
      pubSub.emit("errorDetected", null)
    }
  }
})()