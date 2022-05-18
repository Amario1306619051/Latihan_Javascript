import './App.css';
import React, { Component } from 'react'


function BolTombol(props) {
  return (
    <div>
      <button> {props.name}</button>
    </div>
  )
}


class Logstat extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
       stat: false
    }

  }

  render() {
     let message
     if (this.state.stat === false){
       message = <div>
         <h2>Lets choice the users</h2>
         <BolTombol name="Pridana" />
         <BolTombol name="Amario" />
         <BolTombol name="Muhlis" />
       </div>
     }
     else{
        message = <div>
          <h2>Hello s</h2>
        </div>
     }
     return(
       <div>{message}</div>
     )
  }
}


function App() {
  return (
    <div className="App">
      <h1>Hello visitors</h1>
      <Logstat />
    </div>
  );
}

export default App;
