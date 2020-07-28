import React, { Component } from 'react'
import Square from './Square'
export default class Board extends Component {

    selectSquare = (id) => {
        let array = this.props.squareList
        // array[id]
    }

    render() {
        return (
            <div className="board">
                <div className="row">
                    <Square></Square>
                    <Square></Square>
                    <Square></Square>
                </div>

                <div className="row">
                    <Square></Square>
                    <Square></Square>
                    <Square></Square>
                </div>

                <div className="row">
                    <Square></Square>
                    <Square></Square>
                    <Square></Square>
                </div>

            </div>
        )
    }
}
