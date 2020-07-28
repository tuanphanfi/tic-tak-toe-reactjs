import React, { Component } from 'react'
import Board from './components/Board'

export default class App extends Component {



  render() {

    return (
      <div className="App d-flex justify-content-center align-items-center">
        <Board />

      </div>
    );
  }
}
