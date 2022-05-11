import logo from './logo.svg';
import './App.css';

import React from 'react'

export const Header = () => {
  return (
    <div className='satu'>
      <h1>Breaking news</h1>
    </div>
  )
}


function App() {
  return (
    <div className="App">
      <div className='Kepala'>
        <Header />
      </div>
    </div>
  );
}

export default App;
