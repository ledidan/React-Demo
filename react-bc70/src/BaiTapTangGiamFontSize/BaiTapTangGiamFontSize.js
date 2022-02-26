import React, { Component } from "react";

export default class BaiTapTangGiamFontSize extends Component {
  state = {
    fontSize: 17,
  };
  tangGiamFont = (fSize) => {
    this.setState({
      fontSize: this.state.fontSize + fSize,
    });
  };
  render() {
    return (
      <div className="container">
        <h3 style={{ fontSize: `${this.state.fontSize}px` }}>
          Bai Tap Tang Giam Font Size
        </h3>
        <button
          onClick={() => {
            this.tangGiamFont(1);
          }}
          className="btn btn-outline-primary"
        >
          +
        </button>
        <button
          onClick={() => {
            this.tangGiamFont(-1);
          }}
          className="btn btn-outline-primary ml-2"
        >
          -
        </button>
      </div>
    );
  }
}
