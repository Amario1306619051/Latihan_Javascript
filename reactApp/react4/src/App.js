import './App.css';
import React from 'react'

export const Header = () => {
  return (
    <div>
      <header>
        Jumlah Tekan pada button 
      </header>
    </div>
  )
}



function App() {
  return (
    <div className="App">
      <Header />
    </div>
  );
}

export default App;
