import React from "react";
import TemperatureInput from "./TemperatureInput";

class CalculatorInput extends React.Component {
  render() {
    return (
      <div>
        <TemperatureInput scale="c" />
        <TemperatureInput scale="f" />
      </div>
    );
  }
}

export default CalculatorInput;
