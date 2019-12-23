import React from "react";

// function ListMethod() {
//   const array = ["max", "john", "stark"];
//   const nameArray = array.map(name => <h1>{name}</h1>);
//   return <div>{nameArray}</div>;
// }

function ListMethod() {
  const persons = [
    {
      id: 1,
      name: "srilakshmi",
      age: 22,
      skills: "react"
    },
    {
      id: 2,
      name: "srinu",
      age: 23,
      skills: "vue"
    },
    {
      id: 3,
      name: "sri",
      age: 28,
      skills: "Java script"
    }
  ];
  const personList = persons.map(person => (
    <h1>
      i am {person.name}. I am {person.age}. i am {person.skills}
    </h1>
  ));
  return <div>{personList}</div>;
}

export default ListMethod;
