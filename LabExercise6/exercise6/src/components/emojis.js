import Emoji from "react-emoji-render";
import React, { useState } from "react";
//https://www.npmjs.com/package/react-emoji-render - emojis are from here

  const ClickEmoji = () => {
    const [emoji, setEmoji] = useState (":D");
    
    const eClick = () =>{
        if(emoji === ":D"){
            setEmoji(":)");
            
        }else{
            setEmoji(":D");
        }

        setEmoji( emoji === ":D" ? ":)" : ":D" )//just a shorter way to do the above in one line
    };
    return (
        <div>
            <button onClick={eClick}>Switch Emoji</button>
            <div><Emoji text = {emoji}/></div>
        </div>
    );
};

export default ClickEmoji;
