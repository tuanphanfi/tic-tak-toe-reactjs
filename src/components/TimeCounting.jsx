import React, { Component } from "react";

export default class TimeCounting extends Component {

  render() {
    return (
      <div>
          {/* run this one when the game is over */}
        {/* <button onClick={() => clearInterval(timer)}>Stop Time</button> */}
        <h1>Time</h1>
        <p>
          <strong> {this.props.time}</strong>
          {/* <strong>time 2 {this.state.time2}</strong> */}
        </p>
      </div>
    );
  }
}
