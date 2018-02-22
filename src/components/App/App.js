import React, { Component } from 'react';
import './App.css';
import TypesContainer from '../../containers/TypesContainer/'

class App extends Component {

  render() {
    return (
      <div className='App'>
        <h1 className='header'> POKéDEX </h1>
        <TypesContainer />
      </div>
    );
  }
}


export default App;
