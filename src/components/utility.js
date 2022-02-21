import React from "react";
import Calculator from "./calculator.js";


export default class Utility extends React.Component {
  state = {};

  render() {
    return (
        <div id="utility">
          <p class="titulo">Utility</p>
          <Calculator/>
        </div>
    );
  }
}