alert(evaluate("3+3"));

function evaluate(expression) {
  let result;
  let leftFactor;
  let rightFactor;
  let arrayExpression;
  if(expression.includes("+")) {
    arrayExpression = expression.split("+");
    leftFactor = arrayExpression[0];
    rightFactor = arrayExpression[1]
    result = Number(leftFactor) + Number(rightFactor);
  }
  return result;
}