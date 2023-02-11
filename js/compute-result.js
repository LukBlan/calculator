const computeResultObject = (function() {
  let operation = {
    "-": function (leftNumber, rightNumber) {
      return leftNumber - rightNumber;
    },

    "+": function (leftNumber, rightNumber) {
      return leftNumber + rightNumber;
    },

    "/": function (leftNumber, rightNumber) {
      return leftNumber / rightNumber
    },

    "x": function (leftNumber, rightNumber) {
      return leftNumber * rightNumber;
    },
  }

  function getResult(leftNumber, operator, rightNumber) {
    let result;
    if (operator !== null) {
      result = operation[operator](Number(leftNumber), Number(rightNumber));
    } else {
      result = leftNumber
    }
    return result.toString();
  }

  return {getResult}
})()