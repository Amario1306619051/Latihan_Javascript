import logo from './logo.svg';
import './App.css';

function App() {
   const x = [1,2,3,4]
  return (
    <div className="App">
      <button> Tambah</button>
      {
        x.map(fall => (
          <h2>{fall}</h2>
        ))
      }
    </div>
  );
}

export default App;
