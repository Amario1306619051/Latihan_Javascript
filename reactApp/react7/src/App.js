import './App.css';
import React from 'react'
import satu from "./components/greetings"

export class App extends React.Component {
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
