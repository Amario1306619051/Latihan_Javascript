import './App.css';
import React, { Component } from 'react'
import satu from "./components/greetings"

export class App extends Component {
  render() {
    return (
      <div className='App'>
        <h1>Hello World</h1>
        <satu />
      </div>

    )
  }
}


export default App;
