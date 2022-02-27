import React, { Component } from "react";
import CarItem from "./CarItem";
import CarList from "./CarList";
import CarModels from "./CarModels";

let products = [
  {
    id: 1,
    name: "black car",
    img: "./img/products/black-car.jpg",
    price: 1000,
  },
  { id: 2, name: "red car", img: "./img/products/red-car.jpg", price: 2000 },
  {
    id: 3,
    name: "silver car",
    img: "./img/products/silver-car.jpg",
    price: 3000,
  },
  {
    id: 3,
    name: "Steel car",
    img: "./img/products/steel-car.jpg",
    price: 4000,
  },
];
export default class CarStore extends Component {
  state = {
    spChiTiet: {
      id: 1,
      name: "black car",
      img: "./img/products/black-car.jpg",
      price: 1000,
    },
  };
  changeSp = (carItem) => {
    this.setState({
      spChiTiet: carItem,
    });
  };
  render() {
    return (
      <div className="container">
        <h3>Bai Tap Truyen Props</h3>
        <CarModels spModal={this.state.spChiTiet} />
        <CarList productData={products} changeSp={this.changeSp} />
      </div>
    );
  }
}
