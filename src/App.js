import React from "react";
// import SpaceX from "./Components/SpaceX";
// import PropsExample from "./Components/PropsEx1";
// import ClassPropsEx from "./Components/ClassPropsEx";
// import Person from "./UdemyCourse/Person";
// import ClassEx from "./UdemyCourse/ClassEx";
import PersonDetails from "./UdemyCourse/PersonDetails";

class App extends React.Component {
  state = {
    persons: [
      { name: "sri", age: 30 },
      { name: "laxmi", age: 45 },
      { name: "max", age: 31 }
    ],
    otherState: "some other value",
    showPersons: false
  };
  switchHandler = switchName => {
    this.setState({
      persons: [
        { name: switchName, age: 60 },
        { name: "laxmi", age: 45 },
        { name: "max", age: 35 }
      ]
    });
  };
  nameChangeHandler = event => {
    this.setState({
      persons: [
        { name: event.target.value, age: 60 },
        { name: "laxmi", age: 45 },
        { name: "max", age: 35 }
      ]
    });
  };

  togglePersonsHandler = () => {
    // const doesShow = this.state.showPersons;
    // this.setState({
    //   showPersons: !doesShow
    //    });
    this.setState({
      showPersons: true
    });
  };
  render() {
    const style = {
      backgroundColor: "red",
      font: "inherit",
      border: "1px solid blue",
      padding: "18px",
      cursor: "pointer"
    };

    let persons = null;

    if (this.state.showPersons) {
      persons = (
        <div>
          {this.state.persons.map(person => {
            return (
              <PersonDetails
                name={person.name}
                age={person.age}
                change={this.state.nameChangeHandler}
              />
            );
          })}
        </div>
      );
    }
    return (
      <div className="App">
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
        <button style={style} onClick={this.togglePersonsHandler}>
          switch name
        </button>

        {persons}
      </div>
    );
  }
}

export default App;
