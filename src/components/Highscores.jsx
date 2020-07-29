import React, { Component } from "react";

export default class Highscores extends Component {
  constructor(props) {
    super(props);
    this.state = {
      players: [],
    };
  }
  getData = async () => {
    const url = `http://ftw-highscores.herokuapp.com/tictactoe-dev`;

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
      <>
        <ol>
          Ranking
          {this.state.players.map((item, index) => {
            return <li>{item.player}</li>;
          })}
        </ol>
      </>
    );
  }
}
