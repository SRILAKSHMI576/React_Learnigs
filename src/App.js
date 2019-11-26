import React from "react";
import SpaceX from "./Components/SpaceX";
import PropsExample from "./Components/PropsEx1";
import ClassPropsEx from "./Components/ClassPropsEx";
import Person from "./UdemyCourse/Person";

function App() {
  return (
    <div className="App">
      <h1>Best Practice</h1>
      <hi>Hello world</hi>
      {/* <SpaceX /> */}
      {/* <PropsExample name="Addition: " num={3 + 4}>
        <p>This is children Component</p>
      </PropsExample>

      <PropsExample name="Subtraction: " num={3 - 4}>
        <p>This is children Component</p>
      </PropsExample>

      <PropsExample name="Multiplication: " num={3 * 4}>
        <p>This is children Component</p>
      </PropsExample>

      <PropsExample name="Division: " num={3 / 4}>
        <br />
        <button>Click</button>
      </PropsExample> */}
      {/* <ClassPropsEx name="Addition: " num={3 + 2} />
      <p>This is children Component</p>
      <ClassPropsEx name="Subtraction: " num={3 - 9} />
      <p>This is children Component</p>
      <ClassPropsEx name="Multiplication: " num={4 * 3} />
      <p>This is children Component</p>
      <ClassPropsEx name="Division: " div={12 / 6} />
      <p>This is children Component</p> */}
      <Person />
      <Person />
      <Person />
    </div>
  );
}

export default App;
