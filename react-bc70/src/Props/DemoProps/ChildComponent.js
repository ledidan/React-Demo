import React, { Component } from "react";

export default class ChildComponent extends Component {
  render() {
    /*
        Khác biệt giữa state & props
        + Giống nhau: đều là thuộc tính của class component
        để binding dữ liệu lên giao diện
        + khác nhau :
            - State chứa các giá trị thay đổi trên giao diện
            State có thể thay đổi được giá trị khi gọi phương thức setState.
            Props : là thuộc tính của component chứa giá trị từ component cha
            truyền vào, props không thể thay đổi giá trị.
    */
    return (
      <div className="card">
        <div className="card-header"> </div>
        <img src="https://picsum.photos/200" alt="..." />
        <div className="card-body"></div>
      </div>
    );
  }
}
