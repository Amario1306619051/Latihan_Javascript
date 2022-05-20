import './App.css';

const AlexanderArnold = React.createContext()
function App() {
  return (
    <div className="App">
      <header className="App-header">
        Hello Visitors
      </header>
      <AlexanderArnold.Provider value={{
        theme : theme,
        setTheme : setTheme
      }}>

      </AlexanderArnold.Provider>
    </div>
  );
}

export default App;
