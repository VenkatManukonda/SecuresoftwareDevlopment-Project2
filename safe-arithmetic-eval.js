function safeEvaluateArithmetic(expr) {
  const allowed = /^[0-9+\-*/().\s]+$/;
  if (!allowed.test(expr)) throw new Error('Invalid characters in expression');


  return Function('"use strict"; return (' + expr + ')')();
}

console.log(safeEvaluateArithmetic('2 + (3*4)')); // 14
