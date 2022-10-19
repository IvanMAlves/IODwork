import logo from "./logo.svg";
import "./App.css";
import FlipCard from "./components/FlipCard"

// const user = {
//   firstName: "Joe",
//   lastName: "Doe",
//   occupation: "Architect & Engineer",
//   image: "https://cdn-icons-png.flaticon.com/512/149/149071.png",
// }

const listUsers = [
  {
    id: 1,
    firstName: "Joe",
    lastName: "Doe",
    occupation: "Architect & Engineer",
    age: 60,
    image: "https://cdn-icons-png.flaticon.com/512/149/149071.png",
  },
  {
    id: 2,
    firstName: "Joe1",
    lastName: "Doe1",
    occupation: "Software Engineer",
    age: 35,
    image: "https://cdn-icons-png.flaticon.com/512/149/149071.png",
  },
  {
    id: 3,
    firstName: "Joe2",
    lastName: "Doe2",
    occupation: "System Enginner",
    age: 30,
    image: "https://cdn-icons-png.flaticon.com/512/149/149071.png",
  },
  {
    id: 4,
    firstName: "Joe3",
    lastName: "Doe3",
    occupation: "Intern",
    age: 20,
    image: "https://cdn-icons-png.flaticon.com/512/149/149071.png",
  }
];

const Ocupation = () => {
  return (
    <p>Testing Ocupation</p>
  )
}


function App() {
  const renderFullName = (user) => {
    return (
      <h1>{user.firstName + ' ' + user.lastName}</h1> 
    )
  }
  // const renderFlipCard = (user) => {
  //   return (
  //     <div className="flip-card">
  //       <div className="flip-card-inner">
  //         <div className="flip-card-front">
  //           <img src={user.image} alt="Avatar" className="profileLogo"></img>
  //         </div>
  //         <div className="flip-card-back">
  //           <h1>{user.firstName + ' ' + user.lastName}</h1> 
  //           <p>{user.occupation}</p> 
  //         </div>
  //       </div>
  //     </div>
  //   )
  // }

  /* 
   * string 
    number
    array
    object 
    function
    component 
  */

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <FlipCard 
          user={listUsers[0]}
          testString="Test"
          testNum={10}
          testArr={listUsers}
          renderFullNameMethod={renderFullName}
          testComponent={Ocupation}
        />
        {/* {
          listUsers.map((item) => {
            return (
              <FlipCard user={item} testString="Test"/>
            )
          })
        }   */}
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