import React from "react";

class Form extends React.Component {
  state = {
    name: "sri"
  };

  changeInput = event => {
    this.setState({
      name: event.target.value
      // name: event.target.value.toUpperCase()
    });
  };

  submitName = event => {
    alert("submitted name: " + this.state.name);
    event.preventDefault();
  };
  render() {
    return (
      <div>
        <form onSubmit={this.submitName}>
          <label>
            Name:
            <input
              type="text"
              value={this.state.name}
              onChange={this.changeInput}
            />
          </label>
          <input type="submit" value="Submit" />
        </form>
      </div>
    );
  }
}
export default Form;
