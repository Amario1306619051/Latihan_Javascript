import './App.css';
import React, {useState, useEffect} from 'react'

function Satu () {
  const [number, setNumber] = useState(0)

  useEffect( () => {
    let message 
    if (number % 2 === 0){
      message = `genap`
    } else {
      message = `ganjil`
    }
    document.title = message
  }, [number])

  return(
    <div>
      <h2>
        {number}
      </h2>
      <button onClick = {() => setNumber(number + 1)}>
        +
      </button>
    </div>
  )
}

function App() {
  return (
    <div className="App">
     <h1>Hello Visitors</h1>
     <Satu />
    </div>
  );
}

export default App;
