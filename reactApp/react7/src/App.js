import './App.css';
import React from 'react'
import satu from "./components/greetings"

const greetings = (props) => {
  return (
    <div>greetings</div>
  )
}

export class App extends React.Component {
  render() {
    return (
      <div className='App'>
        <h1>Hello World</h1>
        <greetings />
      </div>

    )
  }
}


export default App;
