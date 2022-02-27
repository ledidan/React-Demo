import React, { Component } from "react";

export default class ProductItem extends Component {
  render() {
    let { product } = this.props;
    return (
      <div className="row">
        <div className="col-12">
          <div className="card">
            <img src={product.image} alt="..." />
            <div className="card-body">
              <p>{product.name}</p>
              <p>{product.price}$</p>
              <button
                style={{ backgroundColor: "black" }}
                className="text-white btn"
              >
                Add item
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
