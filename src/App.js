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

  switch_name_handler = () => {
    this.setState({
      persons: [
        { name: 'Bleep Bloop', age: 25 },
        { name: 'Mivbell', age: 22 }
      ]
    });
  }

  render() {
    return (
      <div className="App">
        <h1>Hello, I am a React App :P</h1>
        <button onClick={this.switch_name_handler}>Switch Name</button>
        <Person name={ this.state.persons[0].name } age={ this.state.persons[0].age } />
        <Person name={ this.state.persons[1].name } age={ this.state.persons[1].age }>I like to sleep!</Person>
      </div>
    );
  }
}

export default App;
