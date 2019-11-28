import React from "react";

class Validation extends React.Component {
  render() {
    return (
      <div>
        {this.props.inputLength > 5 ? "Text long enough" : " Text too short "}
      </div>
    );
  }
}

export default Validation;
