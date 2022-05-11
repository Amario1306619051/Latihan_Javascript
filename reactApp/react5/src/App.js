import './App.css';

import React from 'react'
class Home extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      name: 0
    }
  }

  ZeniusSaingannyaRuangGuru () {
    return(
      this.setState({name: 'zemius'})
    )
  }

  render() {
    return (
    <div>
      <p> {this.state.name} </p>
      <button onClick={this.ZeniusSaingannyaRuangGuru} > Gabener </button>
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
