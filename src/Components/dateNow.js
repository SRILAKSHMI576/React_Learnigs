import React from "react";

class DateNow extends React.Component {
  state = {
    date: new Date()
  };

  componentDidMount() {
    this.timerId = setInterval(() => this.tick(), 1000);
  }

  componentWillUnmount() {
    clearInterval(this.timerId);
  }

  tick() {
    this.setState({
      date: new Date()
    });
  }

  render() {
    return (
      <div>
        <label>Date: {this.state.date.toLocaleTimeString()}</label>
      </div>
    );
  }
}

export default DateNow;
