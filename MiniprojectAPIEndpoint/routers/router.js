"use strict";

//const { getWeatherByLocation } = require("../controllers/weatherAPI");

module.exports = (app) => {
  var armies = require("../controllers/Army");
  //Root router
  app.get("/", (req, res) => {
    res.send("Main Page");
  });

  //army route
  app.route("/game/getArmy").get(armies.getArmy);
  app.route("/game/searchArmy").get(armies.searchArmy);
  //MAKE a new route to search https://docs.aos-api.com/#list-armies
  // Handling 404 request from the client
  app.use((req, res, next) => {
    res.status(404).send("<h1>Page not found on the server</h1>");
  });
};