import React from "react";

function PropsExample(props) {
  return (
    <div>
      <lable>
        {props.name} {props.num}
      </lable>
      {props.children}
    </div>
  );
}

export default PropsExample;
