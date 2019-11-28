import React from "react";

function UserOutput(props) {
  return (
    <div>
      <p>My First name: {props.username}</p>
      <p>My Age: {props.age}</p>
    </div>
  );
}

export default UserOutput;
