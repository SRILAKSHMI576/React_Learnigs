import React from "react";

class PrevStateEx extends React.Component {
  state = {
    count: 0
  };

  handleClickCount = () => {
    this.setState(prevState => {
      return {
        count: prevState.count + 1
      };
    });
  };
  render() {
    const { count } = this.state;
    return (
      <div>
        hello..............s
        <button onClick={this.handleClickCount}>Click {count} times</button>
      </div>
    );
  }
}

export default PrevStateEx;
