import React, { PureComponent } from "react";

export default class ClassPropsEx extends PureComponent {
  render() {
    return (
      <div>
        {this.props.name}
        {this.props.num}
        {this.props.children}
      </div>
    );
  }
}
