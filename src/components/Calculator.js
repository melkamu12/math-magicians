import React from 'react';
import ButtonCalculator from './ButtonCalc';

const Calculator = () => {
  return (
    <div className="Math-Calculator">
      <div className="result-display">
        <span className="result">0</span>
      </div>
      <ButtonCalculator />
    </div>
  );
};

export default Calculator;
