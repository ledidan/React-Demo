import React, { Component } from "react";
import { connect } from "react-redux";
class GioHang extends Component {
  render() {
    return (
      <table className="table text-center">
        <thead>
          <tr>
            <th>Mã sản phẩm</th>
            <th>Hình Ảnh</th>
            <th>Tên sản phẩm</th>
            <th>Đơn giá</th>
            <th>Số lượng</th>
            <th>Thành tiền</th>
          </tr>
        </thead>
        <tbody>
          {this.props.spGioHang.map((item, index) => {
            return (
              <tr key={index}>
                <td>1</td>
                <td>
                  <img src={item.hinhAnh} alt="..." width={50} height={50} />
                </td>
                <td>{item.tenSP}</td>
                <td>{item.giaBan}</td>
                <td>{item.soLuong}</td>
                <td>{item.giaBan * item.soLuong}</td>
                <td>
                  <button className="btn btn-danger">Xoá</button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    );
  }
}

const mapToStateProps = (rootReducer) => {
  return {
    spGioHang: rootReducer.gioHangReducer.gioHang,
  };
};

export default connect(mapToStateProps)(GioHang);
