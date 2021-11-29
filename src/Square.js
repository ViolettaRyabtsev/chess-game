import React from "react";
import "./App.css";
//"https://www.pngfind.com/pngs/m/81-813086_chess-queen-png-download-king-crown-icon-png.png"
const imageUrl = {
  show: "././queenn.png",
};

class Square extends React.Component {
  render() {
    var imageName = this.props.value ? "show" : "notShow";
    return (
      <button
        role="dialog"
        className="square"
        onClick={() => this.props.onClick()}
      >
        {this.props.value ? (
          <img
            className={imageName}
            width="50px"
            height="70px"
            src={imageUrl.show}
            alt="queen"
          />
        ) : null}
      </button>
    );
  }
}

export default Square;
