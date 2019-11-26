import React from "react";

class ClassEx extends React.Component {
  state = {
    person: [
      { name: "sri", age: 60 },
      { name: "laxmi", age: 45 },
      { name: "max", age: 31 }
    ]
  };
  render() {
    return (
      <div>
        {this.state.person.map(detail => {
          return detail.name;
        })}
      </div>
    );
  }
}

export default ClassEx;
