import './App.css';

function Pro (props) {
  return(
    <div>
      <h3>Hello {props.name} form {props.place}</h3>
    </div>
  )
}


function App() {
  return (
    <div className="App">
      <h1>Hello World</h1>
      <Pro name="Amario" place="Bekasi"/>
      <Pro name="Muhlis" place="Mampang"/>
    </div>
  );
}

export default App;
