(function keyFunctions() {
  let functions = {
    "minus": function () {
    },

    "number": function (key) {
      alert(key)
    },

    "dot": function () {
    },

    "equals": function () {
    },

    "delete": function () {
    },

    "clear": function () {
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