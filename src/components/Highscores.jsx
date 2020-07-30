import React, { Component } from "react";

export default class Highscores extends Component {
  constructor(props) {
    super(props);
    this.state = {
      players: [],
    };
  }
  getData = async () => {
    const url = `https://ftw-highscores.herokuapp.com/tictactoe-dev`;

    let data = await fetch(url);
    // console.log(typeof data);
    data = await data.json();

    this.setState({
      players: data.items,
    });
    console.log("list of highscore", data);
    return;
  };
  componentDidMount() {
    this.getData();
  }

  render() {
    //   statement
    if (!this.state.players) {
      return <h1>Loading...</h1>;
    }
    return (
      <div className="col-3 ranking bg-white p-0">
        <ol>
          <h2 className="text-center bg-warning text-white p-3 m-0">Ranking</h2>

          {this.state.players.map((item, index) => {
            return (
              <li className="d-flex justify-content-center align-items-center bg-dark text-warning ml-0 mt-0 p-2 text- border border-warning text-center">
                {index + 1} - {item.player}
              </li>
            );
          })}
        </ol>
      </div>
    );
  }
}
