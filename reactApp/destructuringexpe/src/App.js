import './App.css';

const Greet = ({name, country}) => {
  return(
    <div>
      <h3>Hello i am {name} from {country}</h3>
    </div>
  )
}

function App() {
  return (
    <div className="App">
      <Greet name="Amario" country = "Indonesia" />
      <Greet name="Jimin" country = "Korea" />
    </div>
  );
}

export default App;
