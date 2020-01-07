import React from "react";

class NameChange extends React.Component {
  state = {
    name: "Sri"
  };

  handleClick = e => {
    this.setState({
      name: "Srinivas"
    });
  };
  render() {
    return (
      <div>
        <button onClick={this.handleClick}>Click on</button>
        {this.state.name}
      </div>
    );
  }
}

export default NameChange;
