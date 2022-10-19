import React, { useState } from "react";
import TextField from "react";

const Calculators = () => {
    const calculate = () =>{
    }

  return (
    <div>
      <TextField
        required
        id="firstNumber"
        label="Required"
        defaultValue="Enter First number"
      />
      <TextField
        required
        id="operator"
        label="Required"
        defaultValue="Enter operator"
      />
      <TextField
        required
        id="thirdNumber"
        label="Required"
        defaultValue="Enter Second number"
      />
    <div>
    <button onClick={calculate}>Hello!</button>
    </div>
    </div>
  );
};

export default Calculators;
