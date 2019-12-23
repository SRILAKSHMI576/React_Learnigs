import React from "react";

class Alert extends React.Component {
  clickHandler = () => {
    alert("hi");
  };
  render() {
    return (
      <div>
        <button onClick={this.clickHandler}>Hello</button>
      </div>
    );
  }
}

export default Alert;
