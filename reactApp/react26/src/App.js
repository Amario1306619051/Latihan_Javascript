import './App.css';


function App() {
  const ParentComponent = function (props) {
    const someText = "FooBar";
    return (
       <FirstComponent content={someText} />
    );
   }
  return (
    <div className="App">
      <header className="App-header">
        Hello Visitors
      </header>
        
      <footer>
        created by Amario Fausta
      </footer>
    </div>
  );
}

export default App;
