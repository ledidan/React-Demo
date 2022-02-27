import React, { Component } from "react";
import ProductItem from "./ProductItem";

export default class ProductList extends Component {
  renderProduct = () => {
    let { arrProduct } = this.props;
    return arrProduct.map((product, index) => {
      return (
        <div className="col-4 mt-4" key={index}>
          <ProductItem product={product} />
        </div>
      );
    });
  };
  render() {
    return (
      <div className="row">
        {this.renderProduct()}
        {/* <div className="col-4">
          <ProductItem />
        </div>
        <div className="col-4">
          <ProductItem />
        </div>
        <div className="col-4">
          <ProductItem />
        </div> */}
      </div>
    );
  }
}
