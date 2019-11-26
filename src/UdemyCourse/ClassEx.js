import React from "react";

class ClassEx extends React.Component {
  state = {
    person: [
      { name: "sri", age: 60 },
      { name: "laxmi", age: 45 },
      { name: "max", age: 31 }
    ],
    otherDetail: "something happen"
  };

  switchNameHandler = () => {
    // console.log("hii");
    this.setState({
      person: [
        { name: "srilakshmi", age: 60 },
        { name: "laxmi", age: 45 },
        { name: "max", age: 35 }
      ],
      hover: false
    });
  };

  changeColor = () => {
    this.setState({
      hover: true
    });
  };
  render() {
    const style = {
      color: this.state.hover ? "red" : undefined
    };
    return (
      <div>
        <button onClick={this.switchNameHandler}>Switching</button> <br />
        {/* {this.state.person.map(detail => {
          return detail.name;
        })} */}
        name: {this.state.person[0].name} , age: {this.state.person[0].age}
        <br />
        name: {this.state.person[1].name} , age: {this.state.person[1].age}
        <br />
        name: {this.state.person[2].name} , age: {this.state.person[2].age}
        <br />
        <label onMouseOver={this.changeColor} style={style}>
          {this.state.otherDetail}
        </label>
      </div>
    );
  }
}

export default ClassEx;
