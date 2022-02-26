import React, { Component } from "react";

export default class EventHandler extends Component {
  showMess = (name) => {
    alert("Hello " + name);
  };

  render() {
    const handleCLick = () => {
      console.log("Hello Word");
    };
    return (
      <div className="container">
        <button id="btnShowMess" onClick={handleCLick}>
          Show Messages
        </button>
        <button onClick={this.showMess.bind(this, "Di Dan")}>
          Click Me !!
        </button>
        <button
          onClick={() => {
            this.showMess("Di Dan Dep Trai");
          }}
        >
          Clicks me!
        </button>
      </div>
    );
  }
}
