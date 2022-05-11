import './App.css';

import React from 'react'
class Home extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      name: 0
    }
  }

  ZeniusSaingannyaRuangGuru = () => {
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

class Props extends React.Component {
  ZeniusSaingannyaRuangGuru = () => {
    return(
      this.setState({name: 'zemius'})
    )
  }
  render() {
    return (
      <div>
        <h2> {this.props.name}</h2>
        <button onClick={this.ZeniusSaingannyaRuangGuru} > Tombol2 </button>
      </div>
    )
  }
}


function App() {
  return (
    <div className="App">
        <Home />
        <Props name = "ngeLesin Ajah" />
    </div>
  );
}

export default App;
