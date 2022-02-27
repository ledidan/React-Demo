import React, { Component } from "react";

export default class SanPhamProps extends Component {
  render() {
    let { product, xemChiTietSP } = this.props;
    return (
      <div className="card">
        <img src={product.hinhAnh} alt="..." />
        <div className="card-body">
          <p>{product.tenSP}</p>
          <p>{product.giaBan}</p>
          <button
            className="btn btn-success"
            onClick={() => {
              this.props.xemChiTietSP(product);
            }}
          >
            View Detail
          </button>
        </div>
      </div>
    );
  }
}
