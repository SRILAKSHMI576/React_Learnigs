import React from "react";
import UserOutput from "./UserOutput";
import UserInput from "./UserInput";

class Result extends React.Component {
  state = {
    username: "sri"
  };

  changeUsername = event => {
    this.setState({
      username: event.target.value
    });
  };
  render() {
    return (
      <div>
        <UserOutput username={this.state.username} age="20" />
        <UserOutput username="srinivas" age="25" />
        <UserInput change={this.changeUsername} value={this.state.username} />
      </div>
    );
  }
}
export default Result;
