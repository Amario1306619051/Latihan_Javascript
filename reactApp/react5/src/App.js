import './App.css';

import React from 'react'
class Home extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      name: 'Ruang Guru'
    }
  }
  render() {
    return (
    <div>
      <p> {this.state.name} </p>
      <button> Gabener </button>
    </div>
    )
  }
}

function App() {
  return (
    <div className="App">
        <Home />
    </div>
  );
}

export default App;
