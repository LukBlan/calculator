const computeResultObject = (function() {
  let operation = {
    "-": function (leftNumber, rightNumber) {
      return leftNumber - rightNumber;
    },

    "null": function (leftNumber) {
      return leftNumber;
    }
  }

  function getResult(leftNumber, operator, rightNumber) {
    let result;
    if (operator !== null) {
      result = operation[operator](leftNumber, rightNumber);
    } else {
      result = leftNumber
    }
    return result;
  }

  return {getResult}
})()