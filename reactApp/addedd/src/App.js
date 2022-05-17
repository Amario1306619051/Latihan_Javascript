import './App.css';
import React, { Component } from 'react'


class AlexanderArnold extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
       count: 0
    }
  }

  Increment (){
    this.setState( x => (
      {
        count: x + 1
      }
    )
    )
  }
  render() {
    return (
      <div>
        <button onClick={this.Increment}>you clicked this {this.state.count}</button>
      </div>
    )
  }
}



function App() {
  return (
    <div className="App">
      <h1>Hello Amario</h1>
    </div>
  );
}

export default App;
