import React from "react";
import "./App.css";
class Winner extends React.Component {
  render() {
    return this.props.show ? (
      <div className="popup-box">
        <div className="box2">
          <img height="200px" src="https://i.gifer.com/VZvx.gif" alt=""></img>
          <h2> you win</h2>
          <button onClick={() => this.props.handleCloseWinner()}>close</button>
        </div>
      </div>
    ) : null;
  }
}

export default Winner;
