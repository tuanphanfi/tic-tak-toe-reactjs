import React, { Component } from "react";
import StartButton from "./StartButton";
import TimeCounting from "./TimeCounting";

export default class FacebookInfo extends Component {
  render() {
    return (
      <nav className="navbar navbar-light bg-light justify-content-between">
        <a className="navbar-brand">
          <StartButton
            setParentsState={this.props.setParentsState}
            countTime={this.props.countTime}
          />
        </a>

        <TimeCounting time={this.props.time} />
        <form className="form-inline">
          <img className="card-text" src={this.props.avatarUrl} alt="" />
          <button className="btn  my-2 my-sm-0" type="submit">
            <a className="navbar-brand">{this.props.userName}</a>
          </button>
        </form>
      </nav>
    );
  }
}
