import React, { useState } from "react";
//import TextField from "react";


const Calculators = () => {
  const [firstNumber, setFirstNumber] = useState(0);
  const [secondNumber, setSecondNumber] = useState(0);
  const [Operator, setOperator] = useState('+');
  const [result, setResult] = useState(0);

  const handleChangefirst = (event) => {
    console.log(event);
    setFirstNumber(event.target.value);
    
  };
  const handleChangesecond = (event) => {
    setSecondNumber(event.target.value);
    
  };
  const handleChangeresult = (event) => {
    setSecondNumber(event.target.value);
    
  };

  const calculate = (event) => {
    setOperator(event.target.value);
    console.log(firstNumber,Operator,secondNumber);
  };

  return (
    <div>
      First Number:
      <br></br>
      <input type="text" value={firstNumber} onChange={handleChangefirst} />
      <br></br>
      Operator:
      <br></br>
      <select name="operators" id="operators">
        <option selected value="+" >+</option>
        <option value="-" >-</option>
        <option value="*" >*</option>
        <option value="/" >/</option>
      </select>
      <br></br>
      Second Number:
      <br></br>
      <input type="text" value={secondNumber} onChange={handleChangesecond} />
      <br></br>
      Result:
      <br></br>
      <input type="text" value={result} onChange={handleChangeresult} />
      <br></br>
      <button onClick={calculate}>calculate</button>
    </div>
  );
};

export default Calculators;
