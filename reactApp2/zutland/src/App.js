import './App.css';
import useCounter from './components/counter';

function App() {
    const counter = useCounter(state => state.counter)
    const increase = useCounter(state => state.increase)
    const decrease = useCounter(state => state.decrease)

  return (
    <div className="App">
      <h3>{counter}</h3>
      <button onClick={increase}> increase</button>
      <button onClick={decrease}> decrease</button>
    </div>
  );
}

export default App;
