import React from "react";
import SpaceX from "./Components/SpaceX";
import PropsExample from "./Components/PropsEx1";

function App() {
  return (
    <div className="App">
      {/* <SpaceX /> */}
      <PropsExample name="Addition: " num={3 + 4} />
      <PropsExample name="Subtraction: " num={3 - 4} />
      <PropsExample name="Multiplication: " num={3 * 4} />
      <PropsExample name="Division: " num={3 / 4} />
    </div>
  );
}

export default App;
