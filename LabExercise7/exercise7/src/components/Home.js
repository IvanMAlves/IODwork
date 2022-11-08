import React from "react";
import Clock from "./clock.js"
import Calculators from "./calculator.js"
import Emoji from "./Emoji.js";

const Home = () => {
    return (
      <div>
        <h1>Home</h1>
        <div><Clock/></div><br/>
        <div><Emoji/></div><br/>
        <div><Calculators/></div>
      </div>
    );
  };
  
  export default Home;
  