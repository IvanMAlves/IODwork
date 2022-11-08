import React from "react";
import { MoodContext } from './moodContext';

const Emoji = () => {
    const { happy, sad, mood, setMood} = React.useContext(MoodContext);
    
    const toggleMood = () => {
      const newMood = mood === happy ? sad : happy;
      setMood(newMood);
    }

  return (
    <div>
      <h1>
        <span
          className="emoji"
          role="img"
        >
          {mood}
        </span>
      </h1>
      <button onClick={toggleMood}>
        Change Mood
      </button>
    </div>
  )
};
export default Emoji;