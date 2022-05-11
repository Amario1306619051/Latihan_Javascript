import './App.css';
import React, { useState } from 'react'

export const Header = () => {
  return (
    <div>
        Jumlah Tekan pada button 
    </div>
  )
}


export const tombolAneh = () => {
  const [number, setNumber] = useState(0)
  
  return (
    <div>
      <p> Jumlah klik : {number} kali klik</p>
      <button onClick={() => setNumber(number + 1)}>Klik disini untuk nambah</button>
    </div>
  )
}

function App() {
  return (
    <div className="App">
      <Header />
      <tombolAneh />
    </div>
  );
}

export default App;
