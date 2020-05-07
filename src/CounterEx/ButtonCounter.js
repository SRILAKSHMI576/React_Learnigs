import React from "react";
import updatedComponent from "./HigherOrder";

class ButtonCount extends React.Component {
  render() {
    return (
      <div>
        <button onClick={this.props.incrementCount}>
          hello .......{this.props.count}
        </button>
      </div>
    );
  }
}

export default updatedComponent(ButtonCount);
