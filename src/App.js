import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Person from './Person/Person';

class App extends Component {
  state = {
    persons: [
      { id: '2342342', name: 'Eben', age: 24 },
      { id: '2341523', name: 'Mabel', age: 52 }
    ],
    show_persons: true
  }

  name_changed_handler = (person_id, event) => {
    const person_index = this.state.persons.findIndex((p) => {
      return p.id === person_id;
    }); 
    // find and save the index of the array of the person id that was passed in

    const person = {
      ...this.state.persons[person_index]     // make a copy of the person we want to change
    };                                        // in an object format, from the index number

    person.name = event.target.value;

    const persons = [...this.state.persons];  // make a copy of the entire persons object
    
    persons[person_index] = person;           // replace the target person with the new one we made above

    this.setState({
      persons: persons
    });
  }

  show_persons_handler = () => {
    let is_showing = this.state.show_persons;
    this.setState({
      show_persons: !is_showing
    });
  }


  delete_person_handler = (index) => {
    const persons = this.state.persons;
    persons.splice(index, 1);
    this.setState({ persons: persons });
  }

  render() {

    let persons = null;

    if (this.state.show_persons) {
      persons = (
        <div>
          {
            this.state.persons.map((person, index) => {
              return <Person 
                      name={ person.name } 
                      age={ person.age }
                      change={ (event) => this.name_changed_handler(person.id, event) } 
                      // same as function (event) { this.name_changed_handler(person.id, event) }
                      // in the execution context this function is running and invokes a new function
                      // whilst passing the event 
                      click={ () => this.delete_person_handler(index) }
                      key={ person.id } />
            })
          }
        </div>
      );
    }

    return (
      <div className="App">
        <h1>Hello, I am a React App :P</h1>
        <button onClick={ this.show_persons_handler }>Toggle Persons</button>
        { persons }
      </div>
    );
  }
}

export default App;
