import './App.css';
import React from 'react'
import Satu from "./components/Greetings.js"


export class App extends React.Component {
  render() {
    return (
      <div className='App'>
        <h1>Hello World</h1>
        <Satu />
    
      </div>
    )
  }
}


export default App;
