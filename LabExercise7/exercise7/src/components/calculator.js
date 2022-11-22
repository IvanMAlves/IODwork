import React, { useState } from "react";
//import TextField from "react";

const Calculators = () => {
  const [firstNumber, setFirstNumber] = useState(0);
  const [secondNumber, setSecondNumber] = useState(0);
  const [result, setResult] = useState(0);

  const handleChangefirst = (event) => {
    event.preventDefault();
    setFirstNumber(event.target.value);
  };

  const handleChangesecond = (event) => {
    event.preventDefault();
    setSecondNumber(event.target.value);
  };

  const calculate = (event) => {
    event.preventDefault();
    switch (event.target.operators.value) {
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
          parseInt(firstNumber) * parseInt(secondNumber), //should be times not divide, otherwise works well!
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
        <input type="text" value={firstNumber} onChange={handleChangefirst}  />
        <br></br>
        Operator:
        <br></br>
        <select name="operators" id="operators">
          <option value="+">+</option>
          <option value="-">-</option>
          <option value="*">*</option>
          <option value="/">/</option>
        </select>
        <br></br>
        Second Number:
        <br></br>
        <input type="text" value={secondNumber} onChange={handleChangesecond} />
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
