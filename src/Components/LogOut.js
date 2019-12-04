import React from "react";

class LogOut extends React.Component {
  render() {
    return (
      <div>
        <button onClick={this.props.onClick}>LogOut</button>
        <p>Welcome Back</p>
      </div>
    );
  }
}

export default LogOut;
