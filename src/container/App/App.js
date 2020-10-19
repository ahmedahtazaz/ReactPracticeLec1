import React, { useState } from 'react';
import './App.css';
import Person from '../../components/Person/Person';

function App() {
  const [showPersons, setShowPersons] = useState(false);

  const [persons, setPersons] = useState([{ id: 0, name: 'Ahtazaz', age: 31 }, { id: 1, name: 'Ahmed', age: 30 }, { id: 2, name: 'Khan', age: 29 }]);

  let personsJSX = [];

  const togglePersons = () => setShowPersons(!showPersons)

  const deletePerson = name => {
    const tempPersons = [...persons];
    setPersons(tempPersons.filter(person => person.name !== name));
  }

  const updateNameHandler = (id, name) => {
    const tempPersons = [...persons];
    const person = tempPersons[id];
    person.name = name;

    setPersons(tempPersons);
  }

  const style = {
    backgroundColor: 'blue',
    font: 'inherit',
    border: '1px solid grey',
    padding: '8px',
    cursor: 'pointer',
    color: 'white'
  }

  if (showPersons) {
    persons.map(
      person => personsJSX.push(<Person key={person.id} id={person.id} name={person.name} deletePerson={deletePerson} updateNameHandler={updateNameHandler}>My age is : {person.age}</Person>)
    );

    style.backgroundColor = 'yellow';
    style.color = 'black';
  }

  return (
    <div className="App">
      <button onClick={togglePersons} style={style}>Toggle Persons</button>
      {personsJSX}

    </div>
  );
}

export default App;
