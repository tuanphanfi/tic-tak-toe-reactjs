import React, { Component } from 'react'
import Board from './components/Board'

export default class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      squares: Array(9).fill(null),
      xIsNext: true,
      status: "playing"
    };
  }

  setParentsState = (obj) => {
    this.setState(obj)
  }



  render() {

    return (
      <div className="App d-flex justify-content-center align-items-center">
        <Board 
        status={this.state.status}
        
        xIsNext={this.state.xIsNext} squares={this.state.squares} setParentsState={this.setParentsState} />

      </div>
    );
  }
}
