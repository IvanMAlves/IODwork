import React, { useState } from "react";

import "./styles.css";

function App() {

  const list = [
    "Banana",
    "Apple",
    "Orange",
    "Mango",
    "Pineapple",
    "Watermelon"
  ];

        //get & set filter list is setting to the new value
  const [filterList, setFilterList] = useState(list);
  const renderLists = filterList &&
    filterList.map((item, index) => (
      <div key={index}>{item}</div> //Display each item
    ))

  const handleSearch = (event) => {

    if (event.target.value === "") {
      setFilterList(list); //when it is blank this shows the entire list
      return;
    }
    const filteredValues = list.filter( //
      (item) =>
        item.toLowerCase().indexOf(event.target.value.toLowerCase()) !== -1 
    );
    setFilterList(filteredValues); //this is the set function to set the value to what is typed in
  };

  return (
    <div className="app">
      <div>
        Search: <input name="query" type="text" onChange={handleSearch} />
      </div>
      {renderLists}
    </div>
  );
}

export default App;

/*
    Step1 : Using JSX to render the fruit list
        - Setting up React APP
        - Using array.map to interate the array
        - Using <div>, <span> or <p> to show each element
*/    
//Step2 : Setup the prop for filter (filterList)
//Step3: Adding onChange for input to handle search
//Step4: Execute the search function 
//Step5: Adding React-Bootrap to the search (Style if necessary)


//Advance
//Step1: Instal axios via npm
//Step2: Providing the api to return the list of fruit - Using Axios to fetch data and store into the array
//Step3: Perform search


/*import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
*/