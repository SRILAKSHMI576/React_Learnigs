import React from "react";

class Event extends React.Component {
  state = {
    message: "hello"
  };

  changeHandler = () => {
    this.setState({
      message: "bye "
    });
    console.log(this);
  };
  render() {
    return (
      <div>
        <h1>{this.state.message}</h1>
        <button onClick={this.changeHandler}>123</button>
      </div>
    );
  }
}

export default Event;
