import React from "react";
import Validation from "./Validation";
import Char from "./Char";

class SecondResult extends React.Component {
  state = {
    userInput: ""
  };

  inputChangedHandler = event => {
    this.setState({
      userInput: event.target.value
    });
  };

  deleteCharHandler = index => {
    const text = this.state.userInput.split("");
    text.splice(index, 1);
    const updatedText = text.join("");
    this.setState({
      userInput: updatedText
    });
  };
  render() {
    let charList = this.state.userInput.split("").map((ch, index) => {
      return (
        <Char
          character={ch}
          key={index}
          clicked={() => this.deleteCharHandler(index)}
        />
      );
    });
    return (
      <div>
        <input
          type="text"
          value={this.state.userInput}
          onChange={this.inputChangedHandler}
        />

        <Validation inputLength={this.state.userInput.length} />
        {charList}
      </div>
    );
  }
}

export default SecondResult;
