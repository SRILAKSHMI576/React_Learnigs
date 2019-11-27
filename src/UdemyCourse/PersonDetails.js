import React from "react";
import "./PersonDetails.css";

class PersonDetails extends React.Component {
  render() {
    return (
      <div className="Person">
        <p>
          I am {this.props.name} and I am {this.props.age} years old!
        </p>
        <p onClick={this.props.click}>{this.props.children}</p>
        <input
          type="text"
          onChange={this.props.change}
          value={this.props.name}
        />
      </div>
    );
  }
}

export default PersonDetails;
