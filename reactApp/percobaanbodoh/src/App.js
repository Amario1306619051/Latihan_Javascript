import './App.css';
import React, {useState} from 'react'

function Satu () {
  const [awal,setAwal] = useState({count: 0, number: 0})

  return (
    <div>
      <h2> {awal.count} </h2>
      <button onClick={() => setAwal.count(awal.count + 1)}> + </button>
      <h2> {awal.number} </h2>
      <button> + </button>
    </div>
  )
}

function App() {
  return (
    <div className="App">
      <h1>Hello World</h1>
      <Satu />
    </div>
  );
}

export default App;
