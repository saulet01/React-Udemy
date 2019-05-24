import React, { Component } from 'react';
import Person from './Person/Person';
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
    const style = {
      backgroundColor: 'green',
      color: 'white',
      font: 'inherit',
      border: '1px solid blue',
      padding: '8px',
      cursor: 'pointer'
    };

    let persons = null;

    if(this.state.showPersons){
      persons = (
        <div>
          { this.state.persons.map( (person, index) => {
            return <Person
              click ={ () => this.deletePersonHandler(index) }
              name = { person.name }
              age = { person.age}
              key = { person.id }
              changed = { (event) => this.nameChnagedHandler(event, person.id) }
            />
          })}
        </div>
      );
      style.backgroundColor = 'red';
    }

    const classes = [];
    if(this.state.persons.length <= 2){
      classes.push('red'); //classes = ['red']
    }
    if(this.state.persons.length <= 1){
      classes.push('bold'); //classes = ['red', 'bold']
    }

    // red bold

    return (
        <div className="App">
          <h1>React App</h1>
          <p className={classes.join(' ')}>This is really working!</p>
          <button
            style = { style }
            onClick = { this.togglePersonHandler }>Toggle Persons
          </button>
          { persons }
        </div>
    );
  }
}

export default App;
