import Emoji from "react-emoji-render";
import React, { useState } from "react";

  const ClickEmoji = () => {
    const [emoji, setEmoji] = useState (":D");
    
    const eClick = () =>{
        if(emoji === ":D"){
            setEmoji(":)");
            
        }else{
            setEmoji(":D");
        }
    };
    return (
        <div>
            <button onClick={eClick}>Switch Emoji</button>
            <div><Emoji text = {emoji}/></div>
        </div>
    );
};

export default ClickEmoji;
