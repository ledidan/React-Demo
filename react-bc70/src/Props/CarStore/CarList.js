import React, { Component } from "react";
import CarItem from "./CarItem";

export default class CarList extends Component {
  renderProduct = () => {
    let { productData } = this.props;
    return productData.map((item, index) => {
      return (
        <div className="col-3" key={index}>
          <CarItem changeSp={this.props.changeSp} item={item} />
        </div>
      );
    });
  };

  render() {
    return <div className="row">{this.renderProduct()}</div>;
  }
}
