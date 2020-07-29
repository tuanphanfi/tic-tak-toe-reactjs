import React, { Component } from "react";

export default class TimeCounting extends Component {
  render() {
    return (
      <div>
        <p>
          Time<strong> {this.props.time}</strong>
        </p>
      </div>
    );
  }
}
