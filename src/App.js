import React, { Component } from "react";
import Board from "./components/Board";
import FacebookLogin from "react-facebook-login";
import FacebookInfo from "./components/FacebookInfo";
import Highscores from "./components/Highscores";
import History from "./components/History";

let timer;

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      squares: Array(9).fill(null),
      xIsNext: true,
      status: "playing",
      gameOver: false,
      history: [],
      winner: false,
      userLogIn: false,
      userName: "",
      email: "",
      avatarUrl: "",
      time: 0,
      gameInProcess: false,
    };
  }

  setParentsState = (obj) => {
    this.setState(obj);
  };

  postData = async () => {
    let data = new URLSearchParams();
    data.append("player", this.state.userName);
    data.append("score", -1000);
    console.log("data", data);
    const url = `http://ftw-highscores.herokuapp.com/tictactoe-dev`;
    const response = await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
      },
      body: data.toString(),
      json: true,
    });
  };

  backToPast = (index) => {
    //1. grab the histroy
    let past = this.state.history[index];
    //2. change the value squareList,nextPlayer
    this.setState({
      squares: past.squares,
      xIsNext: past.xIsNext,
    });
  };

  responseFacebook = (res) => {
    this.setState({
      userName: res.name,
      email: res.email,
      avatarUrl: res.picture.data.url,
    });
    console.log(res);
  };

  countTime() {
    const start = Date.now();

    timer = setInterval(() => {
      const millis = Date.now() - start;

      let elapsed = Math.floor(millis);
      // this.setState({ time: elapsed });
      this.setParentsState({ time: elapsed });
    }, 0);
  }
  componentDidMount() {
    // this.countTime();
  }
  render() {
    return (
      <div className="App ">
        {/* navigation */}
        {this.state.userName === "" ? (
          <FacebookLogin
            autoLoad={false}
            appId="590516881834607"
            fields="name,email,picture"
            callback={(resp) => this.responseFacebook(resp)}
          />
        ) : (
          <div className="">
            <FacebookInfo
              userName={this.state.userName}
              email={this.state.email}
              avatarUrl={this.state.avatarUrl}
              time={this.state.time}
              setParentsState={this.setParentsState}
              countTime={this.countTime}
            />

            
          </div>
        )}

        {/* closed nav */}

        {/* body */}

        <div className="container">
          <div className="row">
            <Highscores />
            {/* <StartButton
              setParentsState={this.setParentsState}
              countTime={this.countTime}
            /> */}
            <Board
              gameInProcess={this.state.gameInProcess}
              countTime={this.countTime}
              timer={timer}
              history={this.state.history}
              status={this.state.status}
              gameOver={this.state.gameOver}
              xIsNext={this.state.xIsNext}
              squares={this.state.squares}
              setParentsState={this.setParentsState}
              postData={this.postData}
              test={this.state.test}
              winner={this.state.winner}
              {...this.state}
            />

            <History history={this.state.history}/>
          </div>

          {/* <TimeCounting time={this.state.time} /> */}
          {/* <button onClick={() => clearInterval(timer)}>Stop Time</button> */}
        </div>
      </div>
    );
  }
}
