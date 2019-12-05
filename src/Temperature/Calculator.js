import React, { Component } from "react";
import BoilingVerdict from "./BoilingVerdict";

export class Calculator extends Component {
  state = {
    temperature: "200"
  };

  handleChange = event => {
    this.setState({
      temperature: event.target.value
    });
  };
  render() {
    const temperature = this.state.temperature;
    return (
      <div>
        <fieldset>
          <legend>Enter the temperature: </legend>
          <input
            type="text"
            value={this.state.temperature}
            onChange={this.handleChange}
          />
          <BoilingVerdict celcius={parseFloat(temperature)} />
        </fieldset>
      </div>
    );
  }
}

export default Calculator;
