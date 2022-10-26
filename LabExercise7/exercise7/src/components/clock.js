import React, { Component } from "react";

class Clock extends Component {
  constructor(props) {
    super(props);
    //This declared the state of time at the very beginning
    this.state = {
      time: new Date().toLocaleTimeString(),
    };
  }

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
        <p> {this.state.time}</p>
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