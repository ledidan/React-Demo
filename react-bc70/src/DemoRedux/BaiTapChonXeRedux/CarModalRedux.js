import React, { Component } from "react";
import { connect } from "react-redux";

class CarModalRedux extends Component {
  render() {
    console.log(this.props);
    return (
      <div>
        {/* <button type="button" className="btn btn-primary" data-toggle="modal" data-target="#exampleModal">
    Launch demo modal
  </button> */}
        {/* Modal */}
        <div
          className="modal fade"
          id="exampleModal"
          tabIndex={-1}
          role="dialog"
          aria-labelledby="exampleModalLabel"
          aria-hidden="true"
        >
          <div className="modal-dialog" role="document">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title" id="exampleModalLabel">
                  {this.props.carDetailReducer.name}
                </h5>
                <button
                  type="button"
                  className="close"
                  data-dismiss="modal"
                  aria-label="Close"
                >
                  <span aria-hidden="true">×</span>
                </button>
              </div>
              <div className="modal-body">
                <img
                  src={this.props.carDetailReducer.img}
                  alt="..."
                  className="w-100"
                />
              </div>
              <div className="modal-footer">
                <button
                  type="button"
                  className="btn btn-secondary"
                  data-dismiss="modal"
                >
                  Close
                </button>
                <button type="button" className="btn btn-primary">
                  Save changes
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
// Hàm chuyển đổi state từ redux biến đổi thành props Component
const mapStateToProps = (rootReducers) => {
  // rootReducers State tổng ứng dụng
  return {
    carDetailReducer: rootReducers.carDetailReducer,
  };
};

export default connect(mapStateToProps)(CarModalRedux);
