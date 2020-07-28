import React, { Component } from 'react'
import Board from './components/Board'

export default class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      squares: Array(9).fill(null),
      xIsNext: true,
    };
  }



  render() {

    return (
      <div className="App d-flex justify-content-center align-items-center">
        <Board squares={this.state.squares} />

      </div>
    );
  }
}
