import React, { Component } from "react";

export default class History extends Component {
  render() {
    return (
      <div className="history col-3 bg-white">
        <h2 className="text-center bg-warning w-100 m-0 py-3 text-white">
          History
        </h2>
        <ol>
          {this.props.history.map((_, index) => {
            return (
              <li className="">
                <button
                  className="btn btn-warning mt-2 text-white w-100"
                  onClick={() => this.backToPast(index)}
                >
                  Go To: {index + 1}
                </button>
              </li>
            );
          })}
        </ol>
      </div>
    );
  }
}
