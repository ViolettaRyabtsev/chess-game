import React from "react";
import "./App.css";
class Lost extends React.Component {
  render() {
    return this.props.show ? (
      <div className="popup-box">
        <div className="box">
          <h2>you lost, my friend</h2>
          <button onClick={() => this.props.handleClose()}>try again </button>
        </div>
      </div>
    ) : null;
  }
}

export default Lost;
