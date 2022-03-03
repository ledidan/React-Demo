import React, { Component } from "react";
import DemoChild from "./DemoChild";

export default class DemoPropsChild extends Component {
  render() {
    return (
      <div>
        <h3>Demo Ve truyen props children</h3>
        <DemoChild>
          <p>Hello Word</p>
        </DemoChild>
      </div>
    );
  }
}
