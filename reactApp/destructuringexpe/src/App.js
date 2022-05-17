import './App.css';

Greet = ({name, country}) => {
  return(
    <div>
      <h3>Hello i am {name} from {country}</h3>
    </div>
  )
}

function App() {
  return (
    <div className="App">
      <Greet name="Amario" from = "Indonesia" />
      <Greet name="Jimin" from = "Korea" />
    </div>
  );
}

export default App;
