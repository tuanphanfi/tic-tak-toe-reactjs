import React, { Component } from 'react'
import Square from './Square'
export default class Board extends Component {
    handleClick(i) {
        // slice copy into another array. Whenever we change the previous one, the copy wont be affected. 
        const squares = this.props.squares.slice();

        squares[i] = 'X';
        this.props.setState({
            squares: squares,
            xIsNext: !this.props.xIsNext,
        });

    }

    renderSquare(i) {
        const status = 'Next player: ' + (this.props.xIsNext ? 'X' : 'O');

        return <Square
            value={this.props.squares[i]}
            onClick={() => this.handleClick(i)}
        />;
    }
    render(){
        return <>a</>
    }

    // render() {
    //     return (
    //         <div className="board">
    //             <div className="row">

    //                 <Square></Square>
    //                 <Square></Square>
    //             </div>

    //             <div className="row">
    //                 <Square></Square>
    //                 <Square></Square>
    //                 <Square></Square>
    //             </div>

    //             <div className="row">
    //                 <Square></Square>
    //                 <Square></Square>
    //                 <Square></Square>
    //             </div>

    //         </div>
    //     )
    // }
}
