import React from "react";
import "./App.css";
import Square from "./Square";

class Board extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      squares: Array(16).fill(null),
      showQueen: false,
      result: true,
    };
  }

  handleClick = (i) => {
    const updatedSquares = this.state.squares.slice();
    updatedSquares[i] = true;
    this.setState({
      squares: updatedSquares,
    });
  };

  generateSquare = (i) => {
    return (
      <Square
        value={this.state.squares[i]}
        onClick={() => this.handleClick(i)}
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

  render() {
    const result = this.checkHorizontalSquares();
    console.log(result, "result");
    return (
      <div className={this.checkHorizontalSquares() ? "board-view" : "wrong"}>
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
      </div>
    );
  }
}

export default Board;
