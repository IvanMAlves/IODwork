const { default: axios } = require("axios");
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
    response.end(JSON.stringify({ value: "Hello Word" }));
  } catch (e) {
    console.log(e);
  }
});

//Using fetch for getting data from API endpoint - Return JSON value
app.get("/data-fetch", async (req, res) => {
  try {
    const URL =
      "https://datausa.io/api/data?drilldowns=Nation&measures=Population";

    const response = await fetch(URL);
    const data = await response.json();

    res.set("Content-type", "application/json");
    res.end(JSON.stringify({ data }));
  } catch (e) {
    throw Error(e);
  }
});

//Using axois for getting data from API endpoint - Return JSON value
app.get("/data-axios", async (req, res) => {
  try {
    const URL =
      "https://datausa.io/api/data?drilldowns=Nation&measures=Population";

    const response = await axios.get(URL, { responeType: "json" });
    const data = response.data

    res.set("Content-type", "application/json");
    res.end(JSON.stringify({ data }));
  } catch (e) {
    throw Error(e);
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