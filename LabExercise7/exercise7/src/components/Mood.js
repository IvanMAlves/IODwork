import Emoji from "react-emoji-render";
import React, { useState } from "react";
//https://www.npmjs.com/package/react-emoji-render - emojis are from here

  const Mood = () => {
    const [emoji, setEmoji] = useState (":D");
    
    const eClick = () =>{
        if(emoji === ":sleeping_face:"){
            setEmoji(":)");
            
        }else{
            setEmoji(":sleeping_face:");
        }
    };
    return (
        <div>
            <button onClick={eClick}>Switch Emoji</button>
            <div><Emoji text = {emoji}/></div>
        </div>
    );
};

export default Mood;