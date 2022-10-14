"use strict";

const Calculator = require('../Models/Calculator')
const myCalculator1 = new Calculator();
const myCalculator2 = new Calculator();
const myCalculator3 = new Calculator();
const myCalculator4 = new Calculator();


exports.addOperationByTwoParams = (req, res) => {
  try {
    console.log(req.query);
    const number1 = parseFloat(req.query.number1);//the key which we pass the data is at the end of req.query.number1 so its number1
    const number2 = parseFloat(req.query.number2);

    if (!number1 || !number2){
      throw Error("Missing first and second value");
    }
    const sum = myCalculator1.add(number1, number2);
    //let sum = number1 + number2;
    res.status(200);
    res.json({ success: true, data: sum });
  } catch (e) {
    res.status(400);
    res.json({ success: false, message: e.message });
    throw Error(e.message);
  }
};


exports.addByList = (req, res) => {
  try {
    const listElements = JSON.parse(req.query.list).numbers;

    const sum = myCalculator.addByListArr(listElements);

    res.status(200);
    res.json({ success: true, data: sum });
  } catch (e) {
    res.status(400);
    res.json({ success: false, message: e.message });
    throw Error(e.message);
  }
};

exports.subtractOperation = (req, res) => {
  try {
    const number1 = parseFloat(req.query.number1);//the key which we pass the data is at the end of req.query.number1 so its number1
    const number2 = parseFloat(req.query.number2);

    if (!number1 || !number2){
      throw Error("Missing first and second value");
    }

    //let sub = number1 - number2;
    const sub = myCalculator2.subt(number1, number2);
    res.status(200);
    res.json({ success: true, data: sub });
  } 
  catch (e) {
    res.status(400);
    res.json({ success: false, message: e.message });
    throw Error(e.message);
  }
}


exports.multiplyOperation = (req, res) => {
  try {
    const number1 = parseFloat(req.query.number1);//the key which we pass the data is at the end of req.query.number1 so its number1
    const number2 = parseFloat(req.query.number2);

    if (!number1 || !number2){
      throw Error("Missing first and second value");
    }

    //let mult = number1 * number2;
    const mult = myCalculator3.mult(number1, number2);
    res.status(200);
    res.json({ success: true, data: mult });
  } 
  catch (e) {
    res.status(400);
    res.json({ success: false, message: e.message });
    throw Error(e.message);
  }
}

exports.divideOperation = (req, res) => {
  try {
    const number1 = parseInt(req.query.number1);//the key which we pass the data is at the end of req.query.number1 so its number1
    const number2 = parseInt(req.query.number2);
    console.log(req.query);
    console.log(number2);


    if (number2 == 0){
      throw Error("Cannot Divide by Zero, c'mon Ivan");
    }

    if (!number1 || !number2){
      throw Error("Missing first and second value");
    }

    let div = number1 / number2;
    let remainder = number1 % number2;
 
    //var dividedResult = {division:parseInt(div),remainderResult:remainder};
    const dividedResult = myCalculator3.division(number1, number2);
    res.status(200);
    res.json({ success: true, data: dividedResult });
  } 
  catch (e) {
    res.status(400);
    res.json({ success: false, message: e.message });
    throw Error(e.message);
  }
}





