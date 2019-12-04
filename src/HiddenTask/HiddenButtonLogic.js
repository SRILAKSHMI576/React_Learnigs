import React from "react";
import Warning from "./Warning";

class HiddenButtonLogic extends React.Component {
  state = {
    isShowed: false
  };

  handleHideWarning = () => {
    this.setState({
      isShowed: false
    });
  };

  handleShowWarning = () => {
    this.setState({
      isShowed: true
    });
  };

  render() {
    let warning;

    if (this.state.isShowed) {
      warning = (
        <div>
          <button onClick={this.handleHideWarning}>Hide</button>
          <Warning />
        </div>
      );
    } else {
      warning = (
        <div>
          <button onClick={this.handleShowWarning}>Show</button>
        </div>
      );
    }
    return <div>{warning}</div>;
  }
}

export default HiddenButtonLogic;
