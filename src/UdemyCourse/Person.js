import React from "react";

function Person() {
  return (
    <div>
      <p>I am a person and I am {Math.floor(Math.random() * 30)} years old!</p>
      <p>Addition: {5 + 3}</p>
    </div>
  );
}

export default Person;
