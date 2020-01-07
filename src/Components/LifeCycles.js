import React from "react";

class LifeCycles extends React.Component {
  constructor(props) {
    super(props);
    console.log("constructor");
  }
  state = {
    a: 0
  };
  componentWillMount = () => {
    console.log("component will mount");
  };

  componentDidMount = () => {
    console.log("Component did mount");
  };

  shouldComponentUpdate = () => {
    console.log("should component update");
    return true;
  };

  componentWillUpdate = () => {
    console.log("component will update");
  };

  componentDidUpdate = () => {
    console.log("component did update");
  };

  changeState = event => {
    this.setState({
      a: this.state.a + 10
    });
  };
  render() {
    console.log("render");
    return (
      <div>
        LifeCycles
        <button onClick={this.changeState}>Change state</button>
        {this.state.a}
      </div>
    );
  }
}

export default LifeCycles;
