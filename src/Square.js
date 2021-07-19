import React from "react";
import "./App.css";
const imageUrl = {
  show:
    "https://www.pngfind.com/pngs/m/81-813086_chess-queen-png-download-king-crown-icon-png.png",
  notShow: "",
};
class Square extends React.Component {
  render() {
    const imageName = this.props.value ? "show" : "";
    return (
      <button className="square-" onClick={() => this.props.onClick()}>
        {/* {this.props.value} */}
        <img
          className="square-show"
          width="20px"
          height="20px"
          src={imageUrl[imageName]}
          alt=""
        />
      </button>
    );
  }
}

export default Square;
