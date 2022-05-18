import './App.css';
import React, {useState, useEffect} from 'react'

function Satu() {

  const [count, setCount] = useState(0)

  useEffect(() => {
    document.title = `junyuk`
  })
  return(
    <div>
      <h2>{count}</h2>
      <button onClick={() => setCount(count +1)}> Press me</button>
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
