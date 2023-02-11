(function keyMapper() {
  let mapper =  {
    "0": {key: "0", keyFunction: "number"},
    "1": {key: "1", keyFunction: "number"},
    "2": {key: "2", keyFunction: "number"},
    "3": {key: "3", keyFunction: "number"},
    "4": {key: "4", keyFunction: "number"},
    "5": {key: "5", keyFunction: "number"},
    "6": {key: "6", keyFunction: "number"},
    "7": {key: "7", keyFunction: "number"},
    "8": {key: "8", keyFunction: "number"},
    "9": {key: "9", keyFunction: "number"},
    "-": {key: "-", keyFunction: "minus"},
    "x": {key: "x", keyFunction: "operator"},
    "*": {key: "x", keyFunction: "operator"},
    "+": {key: "+", keyFunction: "operator"},
    "/": {key: "/", keyFunction: "operator"},
    "Enter": {key: "=", keyFunction: "equals"},
    "=": {key: "=", keyFunction: "equals"},
    ".": {key: ".", keyFunction: "dot"},
    "Backspace": {key: "Delete", keyFunction: "Delete"},
    "Delete": {key: "Delete", keyFunction: "Delete"},
    " ": {key: "Clear", keyFunction: "Clear"},
    "Clear": {key: "Clear", keyFunction: "Clear"},
  }

  pubSub.subscribe("keyPressed", mapKey)

  function mapKey(key) {
    alert(mapper[key].key)
  }
})()