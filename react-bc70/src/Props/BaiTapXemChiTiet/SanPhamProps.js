import React, { Component } from "react";
import { connect } from "react-redux";
class SanPhamProps extends Component {
  render() {
    let { product } = this.props;
    return (
      <div className="card">
        <img src={product.hinhAnh} alt="..." />
        <div className="card-body">
          <p>{product.tenSP}</p>
          <p>{product.giaBan}</p>
          <button
            className="btn btn-success"
            onClick={() => {
              // this.props.xemChiTiet(product);
              this.props.xemChiTietSP(product);
            }}
          >
            View Detail
          </button>
          <button
            className="btn btn-warning ml-2"
            onClick={() => {
              this.props.themGioHang(product);
            }}
          >
            Thêm giỏ hàng
          </button>
        </div>
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    xemChiTietSP: (spClick) => {
      const action = {
        type: "XEM_SAN_PHAM",
        spClick: spClick,
      };
      // đưa action lên redux
      dispatch(action);
    },
    themGioHang: (sanPham) => {
      // Tạo ra 1 action
      const action = {
        type: "THEM_GIO_HANG",
        sanPham,
      };
      // Đưa dữ liệu lên redux
      dispatch(action);
    },
  };
};

export default connect(null, mapDispatchToProps)(SanPhamProps);
