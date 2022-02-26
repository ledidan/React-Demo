import React, { Component } from "react";

export default class BaiTapChonXe extends Component {
  state = {
    imgSrc: "./img/products/black-car.jpg",
  };
  changeColor = (color) => {
    this.setState({
      imgSrc: `./img/products/${color}-car.jpg`,
    });
  };
  render() {
    return (
      <div className="container">
        <h3 className="text-center" style={{ color: "red" }}>
          Bài Tập Chọn Màu Xe
        </h3>
        <div className="row">
          <div className="col-6">
            <img src={this.state.imgSrc} alt="..." className="w-100" />
          </div>
          <div className="col-6">
            <div className="row mt-5 ml-5">
              <div className="col-3">
                <button
                  onClick={() => {
                    this.changeColor("black");
                  }}
                  className="btn btn-dark text-white"
                  style={{ color: "black" }}
                >
                  Black
                </button>
              </div>
              <div className="col-3">
                <button
                  onClick={() => {
                    this.changeColor("red");
                  }}
                  className="btn btn-danger text-white"
                  style={{ color: "red" }}
                >
                  red
                </button>
              </div>
              <div className="col-3">
                <button
                  onClick={() => {
                    this.changeColor("silver");
                  }}
                  className="btn btn-light text-dark"
                  style={{ color: "silver" }}
                >
                  silver
                </button>
              </div>
              <div className="col-3">
                <button
                  onClick={() => {
                    this.changeColor("steel");
                  }}
                  className="btn btn-secondary text-white"
                  style={{ color: "gray" }}
                >
                  steel
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
