import React, { useState } from "react";
import SpaceX from "./Components/SpaceX";
import PropsExample from "./Components/PropsEx1";
import ClassPropsEx from "./Components/ClassPropsEx";
import Person from "./UdemyCourse/Person";
import ClassEx from "./UdemyCourse/ClassEx";
import PersonDetails from "./UdemyCourse/PersonDetails";

function App() {
  const [personsState, setPersonsState] = useState({
    person: [
      { name: "sri", age: 30 },
      { name: "laxmi", age: 45 },
      { name: "max", age: 31 }
    ],
    otherState: "some other value"
  });
  console.log(personsState);
  const switchHandler = () => {
    setPersonsState({
      person: [
        { name: "srilakshmi", age: 60 },
        { name: "laxmi", age: 45 },
        { name: "max", age: 35 }
      ]
    });
  };

  return (
    <div className="App">
      <h1>Best practice</h1>
      <h3>Hello World</h3>
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
      {/* <Person />
      <Person />
      <Person /> */}
      {/* <ClassEx name1="REACT" /> */}
      <button onClick={switchHandler}>switch name</button>
      <PersonDetails
        name={personsState.person[0].name}
        age={personsState.person[0].age}
      />
      <PersonDetails
        name={personsState.person[1].name}
        age={personsState.person[1].age}
      >
        My hobbies: racing
      </PersonDetails>
      <PersonDetails
        name={personsState.person[2].name}
        age={personsState.person[2].age}
      />
    </div>
  );
}

export default App;
