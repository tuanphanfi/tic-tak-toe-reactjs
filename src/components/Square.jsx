import React, { Component } from "react";
import purpleMinion from "../img/purpleMinion.png";
import yellowMinion from "../img/yellowMinion.png";

export default class Square extends Component {
  render() {
    return (
      <>
        <div
          onClick={() => this.props.playerTurn()}
          className=" col-4 text-danger border border-danger d-flex justify-content-center align-items-center square "
        >
          {this.props.value === "X" ? (
            <img src={purpleMinion} alt="" />
          ) : this.props.value === "O" ? (
            <img src={yellowMinion} alt="" />
          ) : (
            ""
          )}
        </div>
      </>
    );
  }
}
