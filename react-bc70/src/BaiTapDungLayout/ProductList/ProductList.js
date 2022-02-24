import React, { Component } from "react";
import ProductItem from "../ProductItem/ProductItem";

export default class ProductList extends Component {
  render() {
    return (
      <div>
        <section id="smartphone" className="container-fluid pt-5 pb-5">
          <h1 className="text-dark text-center">BEST SMARTPHONE</h1>
          <div className="row">
            <ProductItem />
            <ProductItem />
            <ProductItem />
            <ProductItem />
          </div>
        </section>
        {/* END SMARTPHONE */}
        {/* BEGIN LAPTOP */}
        <section
          id="laptop"
          className="container-fluid pt-5 pb-5 bg-light text-dark"
        >
          <h1 className="text-center">BEST LAPTOP</h1>
          <div className="row">
            <ProductItem />
            <ProductItem />
            <ProductItem />
            <ProductItem />
          </div>
        </section>
      </div>
    );
  }
}
