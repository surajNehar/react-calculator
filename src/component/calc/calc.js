import React, { useState } from 'react';
import "./calc.css"

function Calculator() {
  const [num1, setNum1] = useState("");
  const [num2, setNum2] = useState("");
  const [result, setResult] = useState("");

  function handleNum1Change(event){
    setNum1(event.target.value);
  };

  function handleNum2Change(event){
    setNum2(event.target.value);
  };

  const handleAddition = () => {
    const sum = parseFloat(num1) + parseFloat(num2);
    setResult(sum);
  };

  const handleSubtraction = () => {
    const difference = parseFloat(num1) - parseFloat(num2);
    setResult(difference);
  };

  const handleMultiplication = () => {
    const product = parseFloat(num1) * parseFloat(num2);
    setResult(product);
  };

  const handleDivision = () => {
    const quotient = parseFloat(num1) / parseFloat(num2);
    setResult(quotient);
  };

  function handleClear(){
    setNum1('');
    setNum2('');
    setResult('');
  };

  return (
    <div>
      <h1>Calculator</h1>
      <div className='input_style'><input type="number" value={num1} onChange={handleNum1Change} />
      <input type="number" value={num2} onChange={handleNum2Change} />
      </div>

      <br />
      <button onClick={handleAddition}>Addition</button>
      <button onClick={handleSubtraction}>Subtraction</button>
      <button onClick={handleMultiplication}>Multiplication</button>
      <button onClick={handleDivision}>Division</button>
      <br />

      <button onClick={handleClear}>Clear</button>
      <br />

      <h3>Result: {result}</h3>
    </div>
  );
}

export default Calculator;
