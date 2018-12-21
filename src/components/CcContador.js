import React from "react";

export default class CcContador extends React.Component {
  constructor() {
    super();
    this.state = {
      contador: 0
    };
  }

  decremento() {
    this.setState({
      contador: this.state.contador - 1
    });
  }

  incremento() {
    this.setState({
      contador: this.state.contador + 1
    });
  }

  render() {
    return (
      <div class="container">
        <h1 class="text-center">Contador</h1>
        <div class="">
          <h3 id="quant-container">{this.state.contador}</h3>

          <div>
            <button class="primary" onClick={this.incremento.bind(this)}>
              {" "}
              +{" "}
            </button>
            <button class="danger" onClick={this.decremento.bind(this)}>
              {" "}
              -{" "}
            </button>
          </div>
        </div>
      </div>
    );
  }
}
