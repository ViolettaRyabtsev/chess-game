import React from "react";
import "./App.css";
const imageUrl = {
  show:
    "https://www.pngfind.com/pngs/m/81-813086_chess-queen-png-download-king-crown-icon-png.png",
  notShow:
    "https://thumbs.dreamstime.com/b/transparent-designer-must-have-fake-background-39672616.jpg",
};

class Square extends React.Component {
  render() {
    var imageName = this.props.value ? "show" : "notShow";
    return (
      <button className="square-" onClick={() => this.props.onClick()}>
        {/* {this.props.value} */}
        <img
          className="square-show"
          width="20px"
          height="20px"
          src={imageUrl[imageName]}
          alt="queen"
        />
      </button>
    );
  }
}

export default Square;
