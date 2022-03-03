import React, { Component } from "react";
import SanPhamProps from "./SanPhamProps";
import { connect } from "react-redux";
import GioHang from "./GioHang";
let phoneJson = [
  {
    maSP: 1,
    tenSP: "VinSmart Live",
    manHinh: "AMOLED, 6.2, Full HD+",
    heDieuHanh: "Android 9.0 (Pie)",
    cameraTruoc: "20 MP",
    cameraSau: "Chính 48 MP & Phụ 8 MP, 5 MP",
    ram: "4 GB",
    rom: "64 GB",
    giaBan: 5700000,
    hinhAnh: "./img/imgPhone/vsphone.jpg",
  },
  {
    maSP: 2,
    tenSP: "Meizu 16Xs",
    manHinh: "AMOLED, FHD+ 2232 x 1080 pixels",
    heDieuHanh: "Android 9.0 (Pie); Flyme",
    cameraTruoc: "20 MP",
    cameraSau: "Chính 48 MP & Phụ 8 MP, 5 MP",
    ram: "4 GB",
    rom: "64 GB",
    giaBan: 7600000,
    hinhAnh: "./img/imgPhone/meizuphone.jpg",
  },
  {
    maSP: 3,
    tenSP: "Iphone XS Max",
    manHinh: "OLED, 6.5, 1242 x 2688 Pixels",
    heDieuHanh: "iOS 12",
    cameraSau: "Chính 12 MP & Phụ 12 MP",
    cameraTruoc: "7 MP",
    ram: "4 GB",
    rom: "64 GB",
    giaBan: 27000000,
    hinhAnh: "./img/imgPhone/applephone.jpg",
  },
];

class BaiTapXemChiTiet extends Component {
  state = {
    viewDetail: {
      maSP: 1,
      tenSP: "VinSmart Live",
      manHinh: "AMOLED, 6.2, Full HD+",
      heDieuHanh: "Android 9.0 (Pie)",
      cameraTruoc: "20 MP",
      cameraSau: "Chính 48 MP & Phụ 8 MP, 5 MP",
      ram: "4 GB",
      rom: "64 GB",
      giaBan: 5700000,
      hinhAnh: "./img/imgPhone/vsphone.jpg",
    },
  };

  renderProduct = () => {
    return phoneJson.map((product, index) => {
      return (
        <div className="col-4" key={index}>
          <SanPhamProps product={product} xemChiTiet={this.xemChiTietSP} />
          {/* <div className="card">
            <img src={product.hinhAnh} alt="..." />
            <div className="card-body">
              <p>{product.tenSP}</p>
              <p>{product.giaBan}</p>
              <button
                className="btn btn-success"
                onClick={() => {
                  this.xemChiTiet(product);
                }}
              >
                View Detail
              </button>
            </div>
          </div> */}
        </div>
      );
    });
  };

  xemChiTietSP = (spClick) => {
    this.setState({
      viewDetail: spClick,
    });
  };
  render() {
    console.log(this.props);
    let {
      maSP,
      tenSP,
      hinhAnh,
      giaBan,
      manHinh,
      ram,
      rom,
      cameraSau,
      cameraTruoc,
      heDieuHanh,
    } = this.props.spChiTiet;

    return (
      <div className="container">
        <h2>Giỏ Hàng</h2>
        <GioHang />
        <h3 className="text-center display-4">Danh sach san pham </h3>
        <div className="row">{this.renderProduct()}</div>
        <div className="mt-2">
          <div className="row">
            <div className="col-4 text-center">
              <h3>{tenSP}</h3>
              <img src={hinhAnh} height={300} alt=".." />
            </div>
            <div className="col-8">
              <h3>Thong So Ky Thuat</h3>
              <table className="table">
                <thead>
                  <tr>
                    <th>Man Hinh</th>
                    <th>{manHinh}</th>
                  </tr>
                  <tr>
                    <th>He dieu hanh</th>
                    <th>{heDieuHanh}</th>
                  </tr>
                  <tr>
                    <th>Camera Truoc</th>
                    <th>{cameraTruoc}</th>
                  </tr>
                  <tr>
                    <th>Camera Sau</th>
                    <th>{cameraSau}</th>
                  </tr>
                  <tr>
                    <th>Ram</th>
                    <th>{ram}</th>
                  </tr>
                  <tr>
                    <th>ROM</th>
                    <th>{rom}</th>
                  </tr>
                </thead>
              </table>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
const mapStateToProps = (rootReducer) => {
  return {
    spChiTiet: rootReducer.ProductDetailReducer,
  };
};
export default connect(mapStateToProps)(BaiTapXemChiTiet);
