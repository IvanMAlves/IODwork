import React, { Component } from "react";
import { MoodContext } from './moodContext';

class Clock extends Component {
  constructor(props) {
    super(props);
    //This declared the state of time at the very beginning
    this.state = {
      time: new Date().toLocaleTimeString(),
    };
  }
  static contextType = MoodContext //this is how you would use Context in a class component

  //This happens when the component mount and the setInterval function get called with a call back function updateClock()
  componentDidMount() {
    this.intervalID = setInterval(() => this.updateClock(), 1000);
  }

  //This section clears setInterval by calling intervalID so as to optimise memory
  componentWillUnmount() {
    clearInterval(this.intervalID);
  }

  //This function set the state of the time to a new time
  updateClock() {
    this.setState({
      time: new Date().toLocaleTimeString(),
    });
  }
  render() {
    return (
      <div>
        <p> {this.state.time} {this.context.mood} </p> {/* line 12 makes this work, to grab the mood from the context and display it anywhere */}
      </div>
    );
  }
}
export default Clock;


//function way of doing it as per Jason's suggestion
/*
import { useState, useEffect } from "react";

const ClockStart = () => {
    const [date, setDate] = useState(new Date());

    UseEffect(() => {
        let timer = setInterval(() => setDate(new Date()), 1000);
        return function cleanup() {
            clearInterval(timer);
        }:
    }, [date]);

    return (
        <div>
            <h2> it is {date.toLocaleTimeString()}</h2>
        </div>
    );
};

export default ClockStart;
*/