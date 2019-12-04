import React from "react";

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
      message = (
        <div>
          <button onClick={this.handleLogoutClick}>LogOut</button>
          <p>Welcome Back</p>
        </div>
      );
    } else {
      message = (
        <div>
          <button onClick={this.handleLogInClick}>LogIn</button>
          <p>Please Sign Up</p>
        </div>
      );
    }

    return <div>{message}</div>;
  }
}

export default LogInControls;
