import React from 'react';
import './Calculator.css';

function Calculator() {
  const handleClick = (value) => {
    console.log(`Button ${value} clicked`);
  };

  return (
    <div className="calculator">
      <div className="output">0</div>
      <div className="row">
        <button className="gray" onClick={() => handleClick('AC')}>AC</button>
        <button className="gray" onClick={() => handleClick('+/-')}>+/-</button>
        <button className="gray" onClick={() => handleClick('%')}>%</button>
        <button className="orange" onClick={() => handleClick('/')}>/</button>
      </div>
      <div className="row">
        <button onClick={() => handleClick('7')}>7</button>
        <button onClick={() => handleClick('8')}>8</button>
        <button onClick={() => handleClick('9')}>9</button>
        <button className="orange" onClick={() => handleClick('x')}>x</button>
      </div>
      <div className="row">
        <button onClick={() => handleClick('4')}>4</button>
        <button onClick={() => handleClick('5')}>5</button>
        <button onClick={() => handleClick('6')}>6</button>
        <button className="orange" onClick={() => handleClick('-')}>-</button>
      </div>
      <div className="row">
        <button onClick={() => handleClick('1')}>1</button>
        <button onClick={() => handleClick('2')}>2</button>
        <button onClick={() => handleClick('3')}>3</button>
        <button className="orange" onClick={() => handleClick('+')}>+</button>
      </div>
      <div className="row">
        <button className="zero" onClick={() => handleClick('0')}>0</button>
        <button onClick={() => handleClick('.')}>.</button>
        <button className="orange" onClick={() => handleClick('=')}>=</button>
      </div>
    </div>
  );
}

export default Calculator;
