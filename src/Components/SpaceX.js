import React from "react";

class SpaceX extends React.Component {
  state = {
    a: 0,
    b: 30
  };
  alertBox = () => {
    alert("HI");
  };
  changeInput = event => {
    this.setState({
      a: event.target.value,
      b: parseInt(event.target.value) + 10
    });
  };
  changeBlur = () => {
    console.log("blur");
  };
  render() {
    return (
      <div>
        <h1>SpaceX</h1>
        {this.state.a}
        {this.state.b}
        <button onClick={this.alertBox}>Click On</button>
        <input onBlur={this.changeBlur} onChange={this.changeInput}></input>
      </div>
    );
  }
}

export default SpaceX;
