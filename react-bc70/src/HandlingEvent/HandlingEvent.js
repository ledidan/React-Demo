import React, { Component } from "react";

export default class HandlingEvent extends Component {
  handleClick = () => {
    console.log("Hello");
  };
  handleSayName = (name) => {
    console.log("Hi " + name);
  };
  render() {
    return (
      <div>
        <button onClick={this.handleClick}>Activate Lasers</button>

        <button
          style={{
            marginLeft: "10px",
          }}
          onClick={() => {
            this.handleSayName("Hoang");
          }}
        >
          Hi + name
        </button>
      </div>
    );
  }
}
