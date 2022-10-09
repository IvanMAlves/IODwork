//CalculatorController.js
"use strict";
exports.addOperationByTwoParams = (req, res) => {
  try {
    const number1 = parseInt(req.query.number1);
    const number2 = parseInt(req.query.number2);
    const sum = number1 + number2;
    res.status(200);
    res.json({ success: true, data: sum });
  } catch (e) {
    throw Error(e.message);
  }
};
exports.addByList = (req, res) => {
  try {
    const listElements = JSON.parse(req.query.list).numbers;
    //Get the sum of all elements inside the list
    let sum = 0;
    listElements.forEach((item) => {
      sum += item;
    });
    res.status(200);
    res.json({ success: true, data: sum });
  } catch (e) {
    throw Error(e.message);
  }
};
exports.subtractObjectByTwoParams = (req, res) => {
  try {
    const number1 = parseInt(req.query.number1);
    const number2 = parseInt(req.query.number2);
    const difference = number1 - number2;
    res.status(200);
    res.json({ success: true, data: difference });
  } catch (e) {
    throw Error(e.message);
  }
};
exports.multiplyObjectByTwoPrams = (req, res) => {
  try {
    const number1 = parseInt(req.query.number1);
    const number2 = parseInt(req.query.number2);
    const product = number1 * number2;
    res.status(200);
    res.json({ success: true, data: product });
  } catch (e) {
    throw Error(e.message);
  }
};
exports.divideObjectByTwoPrams = (req, res) => {
  try {
    const number1 = parseInt(req.query.number1);
    const number2 = parseInt(req.query.number2);
    const quotient = number1 / number2;
    res.status(200);
    res.json({ success: true, data: quotient });
  } catch (e) {
    throw Error(e.message);
  }
};

exports.subtractOperation = (req, res) => {
  try {
    const list = [1, 2, 3, 4];
    let totalSubtract = list[0];
    for (i = 1; i < list.length; i++) {
      totalSubtract -= list[i];
    }
    res.status(200);
    res.json({ success: true, data: quotient });
  } catch (e) {
    throw Error(e.message);
  }
};

exports.subtractByList = (req, res) => {
  try {
    const listElements = JSON.parse(req.query.list).numbers;
    let totalSubtract = listElements[0];
    for (let i = 1; i < listElements.length; i++) {
      totalSubtract -= listElements[i];
    }
    res.status(200);
    res.json({ success: true, data: totalSubtract });
  } catch (e) {
    throw Error(e.message);
  }
};
