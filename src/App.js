import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Person from './Person/Person';

class App extends Component {
  state = {
    persons: [
      { name: 'Eben', age: 24 },
      { name: 'Mabel', age: 52 }
    ]
  }

  switch_name_handler = (new_name) => {
    this.setState({
      persons: [
        { name: 'Bleep Bloop', age: 25 },
        { name: new_name, age: 22 }
      ]
    });
  }

  name_changed_handler = (event) => {
    this.setState({
      persons: [
        { name: event.target.value, age: 24 },
        { name: 'Mabel', age: 52 }
      ]
    });
  }

  render() {
    return (
      <div className="App">
        <h1>Hello, I am a React App :P</h1>
        <button onClick={ this.switch_name_handler.bind(this, 'Maypoo') }>Switch Name</button>
        <Person 
        name={ this.state.persons[0].name } 
        age={ this.state.persons[0].age }
        change={ this.name_changed_handler } />
        <Person 
        name={ this.state.persons[1].name } 
        age={ this.state.persons[1].age }
        click={ this.switch_name_handler.bind(this, 'M.a.b.e.l') }>I like to sleep!</Person>
      </div>
    );
  }
}

export default App;
