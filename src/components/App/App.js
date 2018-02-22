import React, { Component } from 'react';
import './App.css';
import TypesContainer from '../../containers/TypesContainer/'

class App extends Component {
  constructor() {
    super()

    this.state = {
      types: []
    }
  }

  async componentDidMount() {
    const fetchedTypes = await fetch('http://localhost:3001/types');
    const types = await fetchedTypes.json();
    this.setState({ types })
  }

  render() {
    // console.log(this.state)
    return (
      <div className='App'>
        <h1 className='header'> POKéDEX </h1>
        <TypesContainer types={ this.state.types }/>
      </div>
    );
  }
}


export default App;
