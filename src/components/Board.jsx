import React, { Component } from "react";
import Square from "./Square";

export default class Board extends Component {
  calculateWinner(squares) {
    // the lines array below is for every winning combination
    // i.e. there is a winner if there is the same letter (i.e 'X') in boxes 0, 1, and 2 (the first combination below)
    const lines = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ];
    for (let i = 0; i < lines.length; i++) {
      const [a, b, c] = lines[i];
      // create a new array with the same values as each winning combo. i.e. when i = 0 the new array of [a, b, c] is [0, 1, 2]
      if (
        squares[a] &&
        squares[a] === squares[b] &&
        squares[a] === squares[c]
      ) {
        this.props.setParentsState({
          status: `${squares[a]} has won`,
          gameInProcess: false,
          winner: true,
        });
        clearInterval(this.props.timer);
        this.props.postData();
        return squares[a];
      }
    }
    return null;
  }

  playerTurn = (index) => {
    let array = this.props.squares.slice();
    let historyArray = this.props.history;

    // gameOver
    if (array[index] !== null) {
      alert("click other square");
      return;
    }
    if (this.props.winner === true) {
      return;
    }
    if (array[index] === null) {
      if (this.props.xIsNext === true) {
        // array[index] = "X";
        array[index] = "X";

        this.calculateWinner(array);
      } else {
        array[index] = "O";
        this.calculateWinner(array);
      }
    } else {
      return;
    }

    this.props.setParentsState({
      squares: array,
      xIsNext: !this.props.xIsNext,
      history: [
        ...historyArray,
        {
          squares: array,
          xIsNext: !this.props.xIsNext,
        },
      ],
    });

    if (this.props.winner === false && !array.includes(null)) {
      return this.props.setParentsState({
        status: `Tie Game - Game over`,
      });
    }

    console.log(historyArray);
  };

  render() {
    return (
      <div className="col-5 p-0">
        <div className="playerAndStatus">
          <h1 className="text-center bg-white text-warning p-2 m-0">Next player: {this.props.xIsNext === true ? "x" : "o"}</h1>
          {/* <StartButton
              setParentsState={this.setParentsState}
              countTime={this.countTime}
            /> */}
          {/* <h1>{this.props.gameOver == true
                        ? 'game over'
                        : this.props.status}
                    </h1> */}
          <h1 className="text-center bg-dark text-success p-2 m-0">{this.props.status}</h1>
        </div>
        <div className="row m-0">
          {this.props.squares.map((item, index) => {
            return (
              <Square
                gameOver={this.props.gameOver}
                value={item}
                playerTurn={() => this.playerTurn(index)}
              ></Square>
            );
          })}
        </div>
      </div>
    );
  }
}
