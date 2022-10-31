import React from "react";
import Mood from "./Mood.js"
import Clock from "./clock.js"
import Calculators from "./calculator.js"
import { Grid, Button } from "@mui/material";

const Home = () => {
    return (
      <div>
        <h1>Home</h1>
        <Clock/>
        <Mood/>
        <Calculators/>
      </div>
    );
  };
  
  export default Home;
  