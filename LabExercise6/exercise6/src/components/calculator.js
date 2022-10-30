import React, { useState } from "react";
//import TextField from "react";

const Calculators = () => {
  const [firstNumber, setFirstNumber] = useState(0);
  const [secondNumber, setSecondNumber] = useState(0);
  const [operator, setOperator] = useState('+');
  const [result, setResult] = useState(0);

  const handleChangefirst = (event) => {
    //event.preventDefault(); //don't need to do this as react is already capturing and overriding event behaviour
    setFirstNumber(event.target.value);
  };

  const handleChangesecond = (event) => {
    //event.preventDefault(); //don't need to do this as react is already capturing and overriding event behaviour
    setSecondNumber(event.target.value);
  };

  const calculate = (event) => {
    event.preventDefault();
    switch (operator) { //best to store this in state too
      case "+":
        setResult(
           parseInt(firstNumber) + parseInt(secondNumber),
        );
        break;
      case "-":
        setResult(
          parseInt(firstNumber) - parseInt(secondNumber),
        );
        break;
      case "/":
        setResult(
           parseInt(firstNumber) / parseInt(secondNumber),
        );
        break;
      case "*":
        setResult(
          parseInt(firstNumber) / parseInt(secondNumber),
        );
        break;
      default:
        break;
    }
  };

  return (
    <div>
      <form onSubmit={calculate}>
        First Number:
        <br></br>
        <input type="text" value={firstNumber} onChange={(e) => setFirstNumber(e.target.value)} /> {/* this way you don't need a separate handler function */}
        <br></br>
        Operator:
        <br></br>
        <select name="operator" id="operator" onChange={(e) => setOperator(e.target.value)}>
          <option value="+">+</option>
          <option value="-">-</option>
          <option value="*">*</option>
          <option value="/">/</option>
        </select>
        <br></br>
        Second Number:
        <br></br>
        <input type="text" value={secondNumber} onChange={(e) => setSecondNumber(e.target.value)} /> {/* this way you don't need a separate handler function */}
        <br></br>
        Result:
        <br></br>
        <input type="text" value={result} />
        <br></br>
        <input type="submit" value="submit" />
        {/* <button onClick={calculate}>calculate</button> */}
      </form>
    </div>
  );
};

export default Calculators;
