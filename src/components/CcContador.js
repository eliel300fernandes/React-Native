import React from "react";

export default class CcContador extends React.Component {
  render() {
    return (
      <div class="container">
        <h1>Contador</h1>
        <div class="">
          <h3 id="quant-container">0</h3>

          <div>
            <button class="primary"> + </button>
            <button class="danger"> - </button>
          </div>
        </div>
      </div>
    );
  }
}
