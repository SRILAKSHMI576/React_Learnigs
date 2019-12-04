import React from "react";

class UserGreeting extends React.Component {
  state = {
    text: "Please Sign Up",
    para: "LogIn"
  };

  changeText = () => {
    this.setState({
      text: "Welcome Back",
      para: "Log Out"
    });
  };
  render() {
    return (
      <div>
        <button onClick={this.changeText}>{this.state.para}</button>
        <p>{this.state.text}</p>
      </div>
    );
  }
}

export default UserGreeting;
