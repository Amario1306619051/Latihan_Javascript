import './App.css';
import React, {useState} from 'react'

function Keren() {
  const [count, setCount] = useState(0)

  
  return(
    <div>
      <h2>Hello visitors : {count}</h2>
      <button onClick={() => setCount(count+1)}> klik me</button>
    </div>
  )
}

function App() {
  return (
    <div className="App">
      <h1>Hello World</h1>
      <Keren />
    </div>
  );
}

export default App;
