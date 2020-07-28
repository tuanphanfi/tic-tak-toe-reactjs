import React, { Component } from 'react'

export default class Square extends Component {
    

    render() {
        return (
            <>
                <div onClick={() => this.props.playerTurn()} className="col-4 text-danger border border-danger d-flex justify-content-center align-items-center abc ">
                    {this.props.value}
                </div>
            </>
        )
    }
}
