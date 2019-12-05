import React from "react";

class OnSelect extends React.Component {
  state = {
    name: ""
  };

  handleChange = event => {
    this.setState({
      name: event.target.value
    });
  };
  handleSubmit = event => {
    alert("you selected: " + this.state.name);
    event.preventDefault();
  };
  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <label>
            My Favourite:
            <select value={this.state.name} onChange={this.handleChange}>
              <option value="dragan">Dragan Fruit</option>
              <option value="guva">Guva</option>
              <option value="apple">Apple</option>
              <option value="orange">Orange</option>
            </select>
          </label>
          <input type="submit" value="Submit" />
        </form>
      </div>
    );
  }
}

export default OnSelect;
