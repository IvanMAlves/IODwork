const express = require("express");

const app = express();
const port = 3000;

app.get("/", (request, response) => {
  try {
    response.status = 200;
    response.send("Welcome to Node.js");
  } catch (e) {
    console.log(e);
  }
});

//Testing return HTML
app.get("/hello", (request, response) => {
  try {
    response.set("Content-type", "text/html");
    response.status(200).send("<h1>Hello World</h1>");
  } catch (e) {
    console.log(e);
  }
});

//Testing return JSON
app.get("/hello-json", (request, response) => {
  try {
    response.set("Content-type", "application/json");
    response.end(JSON.stringify({value: 'Hello Word'}));
  } catch (e) {
    console.log(e);
  }
});

/*
 * 200, 400, 404, 500
 */

app.listen(port, (error) => {
  if (!error) {
    console.log(`Server is running on port ${port}`);
  } else {
    console.log("Error occurred", error);
  }
});