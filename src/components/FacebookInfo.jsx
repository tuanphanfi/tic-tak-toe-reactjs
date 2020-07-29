import React, { Component } from "react";

export default class FacebookInfo extends Component {
  render() {
    return (
      <div className="card" style={{ width: "18rem" }}>
        {/* <img className="card-img-top" src="..." alt="Card image cap" /> */}
        <div className="card-body">
          <h5 className="card-title">{this.props.userName}</h5>
          <img className="card-text" src={this.props.avatarUrl} alt="" />{" "}
          <a href="#" className="btn btn-primary">
            {this.props.email}
          </a>
        </div>
      </div>
    );
  }
}
