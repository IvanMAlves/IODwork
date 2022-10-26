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