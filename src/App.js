import React, { Component } from 'react';
import Profile from './components/profile';
import logo from './logo.svg';
import './App.css';
import NewComponent from './components/new-components/newcomponent';

class App extends Component {

  render() {
    let names = ["Justin", "Chrissy", "Draco Malfoy"]
    let profiles = names.map((name)=> <Profile name={name}/>)
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Git Workshop</h1>
        </header>
        <div>
          {profiles}
        </div>
        <div>
          <NewComponent />
        </div>
      </div>
    );
  }
}

export default App;
