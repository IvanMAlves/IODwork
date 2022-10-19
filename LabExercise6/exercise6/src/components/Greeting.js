import React from "react";
function Welcome(props) {
    return <h1>Hello, {props.name}</h1>;
  }

export default Welcome;

/*
//Jasons example
const name = props.name;
const Greeting = (props) => {
    return (
        <div>
            <p>hello world {name} - Address {props.address}</p>
        </div>
    )

}

export default Greeting;
*/


