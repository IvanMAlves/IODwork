import axios from "axios";
import React, { useEffect, useState } from "react";

const Weather = () => {
  const [weatherResults, setResults] = useState([]);
  //const axios = require("axios");

  const options = {
    method: "GET",
    url: "https://weather-with-ai.p.rapidapi.com/get_weather/v1",
    params: {lat: '40.723558', lng: '-73.999257', unit: 'Celsius'},
    headers: {
      "X-RapidAPI-Key": "3a62433fb4msh6022396fb0b3fdbp11987ejsn52940ae0dbac",
      "X-RapidAPI-Host": "weather-with-ai.p.rapidapi.com",
    },
  };

  axios
    .request(options)
    .then(function (response) {
      console.log(response.data);
    })
    .then((response) => response.json)
    .then((data) => setResults(data))
    .catch(function (error) {
      console.error(error);
    });

  return (
    <div>
      <h1>Weather API called</h1>
      <h3>{weatherResults.city}</h3>
      <h3>2nd h3 title</h3>
    </div>
  );
};

export default Weather;
/*
const axios = require("axios");

const options = {
  method: 'GET',
  url: 'https://weather-with-ai.p.rapidapi.com/get_weather/v1',
  params: {lat: '40.723558', lng: '-73.999257'},
  headers: {
    'X-RapidAPI-Key': 'a67f4c810cmsh53fbc876893101ep1d36b0jsn8851a48d540a',
    'X-RapidAPI-Host': 'weather-with-ai.p.rapidapi.com'
  }
};

axios.request(options).then(function (response) {
	console.log(response.data);
}).catch(function (error) {
	console.error(error);
});
*/
