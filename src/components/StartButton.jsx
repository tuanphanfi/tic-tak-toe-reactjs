import React, { Component } from "react";

export default class StartButton extends Component {
  countTime = () => {
    this.props.setParentsState({
        gameInProcess : true
        
    })
    this.props.countTime();
    
  };
  render() {
    return <div>
        <button onClick={()=>this.countTime()}>Start</button>
    </div>;
  }
}
