import React from "react";
import "./App.css";
import Square from "./Square";
import Lost from "./Lost";
import Winner from "./Winner";

const initialState = {
  squares: Array(16).fill(0),
  showQueen: false,
  result: true,
  times: 0,
  showLostFunction: false,
  showModal: true,
};

class Board extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      squares: Array(16).fill(0),
      showQueen: false,
      result: true,
      times: 0,
      showLostFunction: false,
      showModal: true,
      countLost: 0,
      countWin: 0,
    };
  }
  handleClick = (i) => {
    const updatedSquares = this.state.squares.slice();
    updatedSquares[i] = 1;
    this.setState({
      squares: updatedSquares,
      times: this.state.times + 1,
    });
    if (this.state.times === 3) {
      this.setState({
        showLostFunction: true,
      });
    }

    if (this.state.showLostFunction === true) {
      updatedSquares[i] = 0;
    }
  };
  generateSquare = (i) => {
    return (
      <Square
        value={this.state.squares[i]}
        onClick={() => this.handleClick(i)}
        lost={this.state.showLostFunction}
      />
    );
  };
  checkHorizontalSquares = () => {
    const sliced1 = this.state.squares.slice(0, 4);
    const sliced2 = this.state.squares.slice(4, 8);
    const sliced3 = this.state.squares.slice(8, 12);
    const sliced4 = this.state.squares.slice(12);

    const first = sliced1.reduce(function (accumulator, currentValue) {
      return accumulator + currentValue;
    });

    const second = sliced2.reduce(function (accumulator, currentValue) {
      return accumulator + currentValue;
    });

    const third = sliced3.reduce(function (accumulator, currentValue) {
      return accumulator + currentValue;
    });
    const fourth = sliced4.reduce(function (accumulator, currentValue) {
      return accumulator + currentValue;
    });
    if (first > 1 || second > 1 || third > 1 || fourth > 1) {
      return false;
    }
    return true;
  };

  checkVerticalSquares = () => {
    const sliced1 = this.state.squares.slice(0, 4);
    const sliced2 = this.state.squares.slice(4, 8);
    const sliced3 = this.state.squares.slice(8, 12);
    const sliced4 = this.state.squares.slice(12);

    const firstVertical = sliced1[0] + sliced2[0] + sliced3[0] + sliced4[0];
    const secondVertical = sliced1[1] + sliced2[1] + sliced3[1] + sliced4[1];
    const thirdVertical = sliced1[2] + sliced2[2] + sliced3[2] + sliced4[2];
    const fourthVertical = sliced1[3] + sliced2[3] + sliced3[3] + sliced4[3];

    if (
      firstVertical > 1 ||
      secondVertical > 1 ||
      thirdVertical > 1 ||
      fourthVertical > 1
    ) {
      return false;
    }
    return true;
  };
  diagonalLeft = () => {
    let arr = [];
    for (let i = 0; i < this.state.squares.length; i++) {
      if (i <= 10) {
        var pair = this.state.squares[i] + this.state.squares[i + 5];
        arr.push(pair);
      } else {
        arr.push(this.state.squares[i]);
      }
    }
    for (var y = 0; y < arr.length; y++) {
      if (arr[y] + arr[y + 5] >= 3) {
        return false;
      }
    }
    return true;
  };
  diagonalRight = () => {
    let arr2 = [];
    for (var i = this.state.squares.length - 1; i >= 0; i--) {
      if (i >= 5) {
        var pair = this.state.squares[i] + this.state.squares[i - 3];
        arr2.push(pair);
      } else {
        arr2.push(this.state.squares[i]);
      }
    }
    for (var y = 0; y < arr2.length; y++) {
      if (arr2[y] + arr2[y + 3] >= 3) {
        return false;
      }
    }
    return true;
  };

  checkAllBoard = () => {
    const horisontal = this.checkHorizontalSquares();
    const vertical = this.checkVerticalSquares();
    const diognalLeft = this.diagonalLeft();
    const diognalRight = this.diagonalRight();

    if (
      horisontal === false ||
      vertical === false ||
      diognalLeft === false ||
      diognalRight === false
    ) {
      return false;
    }
    return true;
  };

  showLost = (boolean) => {
    const result = this.checkAllBoard();
    if (result === false) {
      return (
        <Lost
          show={this.state.showModal}
          handleClose={() =>
            this.setState({
              ...this.state,
              showModal: false || initialState.showModal,
              squares: initialState.squares,
              showQueen: initialState.showQueen,
              result: initialState.result,
              times: initialState.times,
              showLostFunction: initialState.showLostFunction,
              countLost: this.state.countLost + 1,
            })
          }
        />
      );
    } else if (boolean && result === true) {
      return (
        <Winner
          show={this.state.showModal}
          handleCloseWinner={() =>
            this.setState({
              ...this.state,
              showModal: false,
              countWin: this.state.countWin + 1,
            })
          }
        />
      );
    }
  };

  render() {
    return (
      <div className="main-app">
        <div className={this.checkAllBoard() ? "board-view" : "wrong"}>
          <div>
            {this.generateSquare(0)}
            {this.generateSquare(1)}
            {this.generateSquare(2)}
            {this.generateSquare(3)}
          </div>
          <div>
            {this.generateSquare(4)}
            {this.generateSquare(5)}
            {this.generateSquare(6)}
            {this.generateSquare(7)}
          </div>
          <div>
            {this.generateSquare(8)}
            {this.generateSquare(9)}
            {this.generateSquare(10)}
            {this.generateSquare(11)}
          </div>
          <div>
            {this.generateSquare(12)}
            {this.generateSquare(13)}
            {this.generateSquare(14)}
            {this.generateSquare(15)}
          </div>
          {this.showLost(this.state.showLostFunction)}
        </div>
        <div className="who-is-win">
          Player(x) Win : {this.state.countWin} Lost : {this.state.countLost}
        </div>
      </div>
    );
  }
}

export default Board;
