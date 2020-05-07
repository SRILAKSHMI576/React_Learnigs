import React from "react";

const updatedComponent = OriginalComponent => {
  class HigherOrder extends React.Component {
    state = {
      count: 0
    };

    incrementCount = () => {
      this.setState(prevState => {
        return { count: prevState.count + 1 };
      });
    };
    render() {
      return (
        <OriginalComponent
          count={this.state.count}
          incrementCount={this.state.incrementCount}
        />
      );
    }
  }
  return HigherOrder;
};

export default updatedComponent;
