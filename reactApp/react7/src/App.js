import './App.css';
import React from 'react'
import Satu from "./components/greetings"


export class App extends React.Component {
  render() {
    return (
      <div className='App'>
        <h1>Hello World</h1>
        <Satu name = "Amario" country='Indonesia'/>
      </div>
    )
  }
}


export default App;
