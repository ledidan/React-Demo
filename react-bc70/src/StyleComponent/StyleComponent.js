import React, { Component } from "react";
import style from "./Style.module.css";
export default class StyleComponent extends Component {
  render() {
    return (
      <div>
        <p className="">Hello Word</p>
        <p className={style.pColorGreen}>Di Dan Dep Trai</p>
        <p className={style["p-color-red"]}>Sodia Agency</p>
      </div>
    );
  }
}
