"use strict";

//const { getWeatherByLocation } = require("../controllers/weatherAPI");

module.exports = (app) => {
  var calculator = require("../controllers/CalculatorController");
  var weather = require("../controllers/weatherAPI");
  //Root router
  app.get("/", (req, res) => {
    res.send("Main Page");
  });

  //Calculator Operation
  app.route("/operation/addByTwoParams").get(calculator.addOperationByTwoParams); // the first location in "" is the location the second is the method
  app.route("/operation/addByList").get(calculator.addByList);

  app.route("/operation/subtract").get(calculator.subtractOperation);
  app.route("/operation/mutiply").get(calculator.multiplyOperation);
  app.route("/operation/divide").get(calculator.divideOperation);

  app.route("operation/getWeatherByLocation").get(weather.getWeatherByLocation);


  // Handling 404 request from the client
  app.use((req, res, next) => {
    res.status(404).send("<h1>Page not found on the server</h1>");
  });
};