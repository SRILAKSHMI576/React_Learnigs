import React from "react";

const scaleNames = {
  c: "Celcius",
  f: "Farenheit"
};

class TemperatureInput extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      temperature: ""
    };
  }

  handleChange = event => {
    this.setState({
      temperature: event.target.value
    });
  };
  render() {
    const temperature = this.state.temperature;
    const scale = this.props.scale;
    return (
      <div>
        <fieldset>
          <legend>Enter temperature in {scaleNames[scale]}:</legend>
          <input type="text" value={temperature} onChange={this.handleChange} />
        </fieldset>
      </div>
    );
  }
}

export default TemperatureInput;
