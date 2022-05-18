import './App.css';
import React, { useState} from 'react'

function Hook () {
  const [name,setName] = useState({firstname: '', lastname: ''})
  return(
    <form>
      <input type='text' 
      value={name.firstname}
      onChange={e => setName(e.target.value)}
      />

      <h2>{name.firstname}</h2>
    </form>
  )
}

function App() {
  return (
    <div className="App">
      <h1> Hello World</h1>
      <Hook />
    </div>
  );
}

export default App;
