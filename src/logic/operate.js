import Big from 'big.js';

const operate = (firstNumber, secondNumber, operation) => {
  const Current = Big(firstNumber);
  const nextNumber = Big(secondNumber);
  if (operation === '+') {
    return Current.plus(nextNumber).toString();
  }
  if (operation === '-') {
    return Current.minus(nextNumber).toString();
  }
  if (operation === '*') {
    return Current.times(nextNumber).toString();
  }
  if (operation === '/') {
    try {
      return Current.div(nextNumber).toString();
    } catch (err) {
      return "Can't divide by 0.";
    }
  }
  if (operation === '%') {
    try {
      return Current.mod(nextNumber).toString();
    } catch (err) {
      return "Can't find modulo as can't divide by 0.";
    }
  }
  throw Error(`Unknown operation '${operation}'`);
};
export default operate;
