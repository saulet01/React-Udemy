import React, { Component } from 'react';
import Person from '../components/Persons/Person/Person';
import Cockpit from '../components/Cockipit/Cockpit';
import Persons from '../components/Persons/Persons';
import './App.css';

class App extends Component {

  state = {
    persons: [
      { id: 'sad', name: 'Max', age: 28 },
      { id: '123', name: 'Saken', age: 25 },
      { id: 'asd', name: 'Dinara', age: 21 }
    ],
    otherState: 'some other value',
    showPersons: false
  };

  nameChnagedHandler = (event, id) => {
    const personIndex = this.state.persons.findIndex(p => {
      return p.id === id;
    });

    const person = {
      ...this.state.persons[personIndex]
    };

    person.name = event.target.value;
    const persons = [...this.state.persons];
    persons[personIndex] = person;
    // const person = Object.assign({}, this.state.person[personIndex])

    this.setState({
      persons: persons
    });
  }

  deletePersonHandler = (personIndex) => {
    // const persons = this.state.persons.slice();
    const persons = [...this.state.persons];
    persons.splice( personIndex, 1 );
    this.setState({ persons: persons });
  }

  togglePersonHandler = () => {
    const doesShow = this.state.showPersons;
    this.setState( {showPersons: !doesShow } );
  }

  render() {
    let persons = null;

    if(this.state.showPersons){
      persons = <Persons
            persons = {this.state.persons}
            changed = {this.nameChnagedHandler}
            clicked = {this.deletePersonHandler} />;
    }

    return (
        <div className="App">
          <Cockpit
            showPerson = {this.state.showPersons}
            persons = {this.state.persons}
            clicked = {this.togglePersonHandler}
          />
          { persons }
        </div>
    );
  }
}

export default App;
