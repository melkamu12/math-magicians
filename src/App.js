import React from 'react';
import Calculator from './components/Calculator';

const App = () => {
  return (
    <div className="Math-Calculator">
      <div className="result-display">
        <span className="result">0</span>
      </div>
      <Calculator />
    </div>
  );
};

export default App;
