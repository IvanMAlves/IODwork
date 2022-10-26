import React, { useState } from "react";

const HelloClick = () => {
    const [name, setName] = useState ("World");

    const handleClick = () =>{
        if(name === "World"){
            setName("Ivan");
        }else{
            setName("World");
        }
    };
    return (
        <div>
            <div><h1>Hello, {name}</h1></div>
            <button onClick={handleClick}>Hello!</button>
            
        </div>
    );
};

export default HelloClick;

/*

import React, { useState } from "react";

class HelloClick extends React.Component {
    constructor(props) {
        super(props);
        this.state = {name: "Ivan"};
    }
    render() {
        return (
            <div><h1>Hello, {this.state.name}</h1></div>
    }
};

*/