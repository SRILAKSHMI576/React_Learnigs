import React from "react";

class LogIn extends React.Component {
  render() {
    return (
      <div>
        <button onClick={this.props.onClick}>LogIn</button>
        <p>Please Sign Up</p>
      </div>
    );
  }
}

export default LogIn;
