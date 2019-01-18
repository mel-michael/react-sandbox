import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';
import NameForm from './NameForm';
import MessageForm from './MessageForm';
import SelectTag from './SelectTag';
import FileInputForm from './FileInputForm';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <NameForm /> 
          <MessageForm />
          <SelectTag />
          <FileInputForm />
        </header>
      </div>
    );
  }
}

export default App;
