import React, { Component } from 'react';
import ToDoList from '../src/components/ToDoList';

import './App.css'

class App extends Component {

  state = {
    count: 0
  }

  increment = () => {
    this.setState({
      count: this.state.count + 1
    })
  }

  decrement = () => {
    this.setState({
      count: this.state.count - 1 
    })
  }
  

  render() {
    return (
      <div className="App">
        {/* Handle click, reference element, handle input, display value */}
        <ToDoList 
        />
      </div>
    )
  }
}

export default App
