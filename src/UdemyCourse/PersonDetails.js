import React from "react";

class PersonDetails extends React.Component {
  render() {
    return (
      <div>
        <p>
          I am {this.props.name} and I am {this.props.age} years old!
        </p>
        <p>{this.props.children}</p>
      </div>
    );
  }
}

export default PersonDetails;
