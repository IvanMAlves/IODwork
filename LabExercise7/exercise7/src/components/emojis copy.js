import Emoji from "react-emoji-render";
import React, { useContext } from "react";

//https://www.npmjs.com/package/react-emoji-render - emojis are from here

function EmojiChange() {
  const [emoji, setEmoji] = useContext(":D");

  function ClickEmoji() {
    if (emoji === ":D") {
      setEmoji(":)");
    } else {
      setEmoji(":D");
    }
  }
  return (
    <div>
      <button onClick={ClickEmoji}>Switch Emoji</button>
      <div>
        <Emoji text={emoji}/>
 
      </div>
    </div>
  );
}

export default EmojiChange;
