import React, { Component } from "react";

export default class LoginForm extends Component {
  state = {
    login: false,
  };

  userName = "Di Dan";

  renderFormLogin = () => {
    if (this.state.login) {
      return <div>{this.userName}</div>;
    }
    return (
      <button className="btn btn-primary btn-submit" onClick={this.handleLogin}>
        Login
      </button>
    );
  };
  handleLogin = async () => {
    // this.state.login = false;
    /* Là giá trị có sẵn của react class component,
    chứa các giá tri thay đổi trên giao diện khi người dùng thao tác */
    /* setState là phương thức có sẵn của react class component. Nhận vào tham số là 1
  state mới
  + Thay đổi các giá trị của state = state mới
  + Render lại giao diện
  + setState là 1 phương thức bất đồng bộ
  */
    await this.setState(
      {
        login: true,
      },
      () => {
        console.log(this.state.login);
      }
    );
  };
  render() {
    return (
      <div className="container">
        {/* {this.login ? <div>Hello {this.userName}</div> : <button>Login</button>} */}
        {this.renderFormLogin()}
      </div>
    );
  }
}
