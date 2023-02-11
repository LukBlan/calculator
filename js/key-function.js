(function keyFunctions() {
  let functions = {
    "minus": function () {
    },

    "number": function (number) {
      pubSub.emit("newNumber", number);
    },

    "dot": function () {
      pubSub.emit("addDot", null);
    },

    "equals": function () {
      pubSub.emit("displayResult", null);
    },

    "delete": function () {
      pubSub.emit("deleteLastNumber", null);
    },

    "clear": function () {
      pubSub.emit("clearDisplay", null);
    },

    "operation": function () {
    },

  }
  // Subscribe Event
  pubSub.subscribe("applyKeyFunction", applyKeyFunction);

  function applyKeyFunction(keyMapped) {
    functions[keyMapped.keyFunction](keyMapped.key)
  }
})()