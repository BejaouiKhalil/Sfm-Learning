import React, { Component } from 'react';
import Logo from './logo.svg';
import './App.css';
import NavBar from './Admin/navBar';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <NavBar></NavBar>
        </header>
      </div>
    );
  }
}

export default App;
