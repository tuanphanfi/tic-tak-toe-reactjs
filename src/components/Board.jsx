import React, { Component } from 'react'
import Square from './Square'
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
            if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
                this.props.setParentsState({
                    status: `${squares[a]} has won`
                })
                return squares[a];


            }
        }
        return null
    }


    playerTurn = (index) => {
        let array = this.props.squares

        if (array[index] == null) {
            if (this.props.xIsNext == true) {
                array[index] = "X"

                this.calculateWinner(array)

            } else {
                array[index] = "O"
                this.calculateWinner(array)
            }
        } else {
            return
        }
        console.log(array)

        this.props.setParentsState({
            squares: array, xIsNext: !this.props.xIsNext,

        })
    }

    render() {
        return (
            <div className="">
                <div className="a">

                    <h1>Next player: {this.props.xIsNext == true ? "x" : "o"}</h1>


                    <h1>{this.props.status}</h1>
                </div>
                <div className="row">

                    {this.props.squares.map((item, index) => {
                        return (
                            <Square value={item} playerTurn={() => this.playerTurn(index)}></Square>

                        )
                    })}
                </div>

            </div>
        )
    }
}
