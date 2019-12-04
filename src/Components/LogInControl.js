import React from "react";
import LogOut from "./LogOut";
import LogIn from "./LogIn";

class LogInControls extends React.Component {
  state = {
    isLoggedIn: false
  };
  handleLogoutClick = () => {
    this.setState({
      isLoggedIn: false
    });
  };

  handleLogInClick = () => {
    this.setState({
      isLoggedIn: true
    });
  };
  render() {
    const isLoggedIn = this.state.isLoggedIn;
    let message;
    if (isLoggedIn) {
      message = <LogOut onClick={this.handleLogoutClick} />;
    } else {
      message = <LogIn onClick={this.handleLogInClick} />;
    }
    return <div>{message}</div>;
  }
}

export default LogInControls;
