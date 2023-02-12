const computeResultObject = (function() {
  let operation = {
    "-": function (leftNumber, rightNumber) {
      return leftNumber - rightNumber;
    },

    "+": function (leftNumber, rightNumber) {
      return leftNumber + rightNumber;
    },

    "/": function (leftNumber, rightNumber) {
      let result;
      if (rightNumber === 0) {
        result = "Error";
      } else {
        result = leftNumber / rightNumber;
      }
      return result;
    },

    "x": function (leftNumber, rightNumber) {
      return leftNumber * rightNumber;
    },
  }

  function getResult(currenExpression) {
    const operator = currenExpression.currentOperator;
    const leftNumber = currenExpression.leftNumber;
    const rightNumber = currenExpression.rightNumber;
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