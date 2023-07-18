import React, { useState } from 'react';
import ButtonCalculator from './ButtonCalc';
import calculate from '../logic/calculate';

function Calculator() {
  const [calcData, setData] = useState({
    total: null,
    next: null,
    operation: null,
  });

  const ButtonClick = (buttonName) => {
    setData((prevState) => calculate(prevState, buttonName));
  };

  return (
    <div className="Math-Calculator">
      <div className="result-display">
        <span className="result">{calcData.next || calcData.total || '0'}</span>
      </div>
      <ButtonCalculator ButtonClick={ButtonClick} />
    </div>
  );
}
export default Calculator;
