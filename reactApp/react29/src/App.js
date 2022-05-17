import './App.css';

function App() {

  const refInput = useRef()
  return (
    <div className="App">
      <input type={'text'} ref />
    </div>
  );
}

export default App;
