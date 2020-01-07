import React from "react";

class TextHoverCount extends React.Component {
  state = {
    count: 0
  };

  hoverCount = () => {
    this.setState({
      count: this.state.count + 1
    });
  };

  render() {
    const { count } = this.state;
    return (
      <div>
        <h3 onMouseOver={this.hoverCount}>hello .......{count}</h3>
      </div>
    );
  }
}

export default TextHoverCount;
