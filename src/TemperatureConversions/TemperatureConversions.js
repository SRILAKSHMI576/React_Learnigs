import React, { Component } from "react";
import CelciusTemperature from "./CelciusTemperature";

export class TemperatureConversions extends Component {
  state = {
    temperature: "",
    farenheit: ""
  };

  handleChange = event => {
    this.setState({
      temperature: event.target.value
    });
  };

  handleChangeValue = event => {
    this.setState({
      farenheit: event.target.value
    });
  };
  render() {
    const temperature = this.state.temperature;
    const multiply = (9 / 5) * temperature;
    const adding = multiply + 32;

    // const farenheit = this.state.farenheit;
    // const subtract = farenheit - 32;
    // const farenheitResult = (subtract * 5) / 9;

    return (
      <div>
        <fieldset>
          <legend>Enter the temperature in Celcius: </legend>
          <input
            type="text"
            value={this.state.temperature}
            onChange={this.handleChange}
          />
        </fieldset>

        <fieldset>
          <legend>Enter the temperature in Faherinheit: </legend>
          <input type="text" value={adding} onChange={this.handleChangeValue} />
        </fieldset>

        <CelciusTemperature celcius={parseFloat(temperature)} />
      </div>
    );
  }
}

export default TemperatureConversions;
