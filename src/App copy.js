import React from 'react';
import Board from './components/Board'
import './App.css';

function App() {

  return (
    <div className="App">
      <h1>Tic Tac Toe</h1>
      <h3>User name: {this.state.username}</h3>
      <h3>nextPlayer: {this.state.nextPlayer}</h3>
      <Board sqaureList={this.state.sqaureList}></Board>
      <ol>History</ol>
      <ol>Ranking</ol>
    </div>
  );
}

export default App;
