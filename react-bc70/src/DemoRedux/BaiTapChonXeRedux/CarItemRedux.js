import React, { Component } from "react";
import { connect } from "react-redux";

class CarItemRedux extends Component {
  render() {
    let { item } = this.props;
    console.log(this.props);
    return (
      <div className="card">
        <img src={item.img} alt="..." />
        <div className="card-body">
          <p>{item.name}</p>
          <p>{item.price}</p>
          <button
            type="button"
            className="btn btn-success"
            data-toggle="modal"
            data-target="#exampleModal"
            onClick={() => {
              this.props.viewDetail(item);
            }}
          >
            View Detail
          </button>
        </div>
      </div>
    );
  }
}
// Hàm Dispatch tạo ra các props là phương pháp đứa dữ liệu lên redux
const mapDispatchToProps = (dispatch) => {
  return {
    viewDetail: (carDetail) => {
      const action = {
        type: "XEM_CHI_TIET",
        carDetail: carDetail,
      };
      // Dùng hàm Dispatch để đưa dữ liệu lên redux
      dispatch(action);
    },
  };
};

export default connect(null, mapDispatchToProps)(CarItemRedux);
