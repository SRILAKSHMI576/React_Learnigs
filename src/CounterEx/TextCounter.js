import React from "react";
import updatedComponent from "./HigherOrder";

class TextHoverCount extends React.Component {
  render() {
    return (
      <div>
        <h3 onMouseOver={this.props.incrementCount}>
          hello .......{this.props.count}
        </h3>
      </div>
    );
  }
}

export default updatedComponent(TextHoverCount);
