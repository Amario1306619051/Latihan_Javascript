import './App.css';
import React, { Component } from 'react'


class AlexanderArnold extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
       count: 0
    }
  }

  IncrementFive (){
    this.setState( x => (
      {
        count: x.count + 1
      }
    )
    )
  }
  render() {
    return (
      <div>
        <button onClick={() => this.IncrementFive()}>you clicked this {this.state.count}</button>
      </div>
    )
  }
}



function App() {
  return (
    <div className="App">
      <h1>Hello Amario</h1>
      <AlexanderArnold />
    </div>
  );
}

export default App;
