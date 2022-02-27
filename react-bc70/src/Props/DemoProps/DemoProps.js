import React, { Component } from "react";
import ChildComponent from "./ChildComponent";

export default class DemoProps extends Component {
  render() {
    let { sanPham } = this.props;
    return (
      <div className="container">
        <div className="row">
          <div className="col-4">
            <ChildComponent titleProduct="IphoneXS MAX" priceProduct={2000} />
          </div>
        </div>
      </div>
    );
  }
}
