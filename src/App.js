import React, { Component } from 'react';
import './App.css';
import Input from './Input/input.js';
import Output from './Output/output.js';

class App extends Component {

state = {
    firstName: "Obito",
    lastName: "UCHIHA",
    age: 20
  };

FirstNameHander = (event)=> {
  this.setState({
    firstName: event.target.value,
    lastName: "UCHIHA",
    age: 20
  });
};

LastNameHander = (event)=> {
  this.setState({
    firstName: this.state.firstName,
    lastName: event.target.value,
    age: 20
  });
};
AgeHander = (event)=> {
  this.setState({
    firstName: this.state.firstName,
    lastName: this.state.lastName,
    age: event.target.value
  });
};
  render(){ 
    return (
      <div className="App">
        <Input ChangeFirst={this.FirstNameHander} ChangeLast={this.LastNameHander} ChangeAge={this.AgeHander}/>
        <Output firstName={this.state.firstName} lastName={this.state.lastName} age={this.state.age}/>
      </div>
    );
  }
}

export default App;