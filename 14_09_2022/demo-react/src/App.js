import logo from './logo.svg';
import './App.css';
//import moment from 'moment-timezone';


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

/*
function App() {
  const name = "Anuj";
  const time = moment().tz("America/Los_Angeles").format();
  return (
    <div className="App">
      <p className="name">Hello {name}</p>
      <p>{time}</p>
    </div>
  );
}

moment().tz(stringInput).format();
moment().tz("America/Los_Angeles").format();

*/

export default App;

