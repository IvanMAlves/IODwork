import logo from "./logo.svg";
import "./App.css";

import HelloClick from "./components/clicking";
import ClickEmoji from "./components/emojis";
import Calculators from "./components/calculator";
import Clock from "./components/clock";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          <div>
            <HelloClick></HelloClick>
          </div>
          <div>
            <Clock />
          </div>
          <div>
            <ClickEmoji></ClickEmoji>
          </div>
          <div>
            <Calculators></Calculators>
          </div>
        </p>
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
