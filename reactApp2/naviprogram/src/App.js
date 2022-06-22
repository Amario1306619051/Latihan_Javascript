import './App.css';
import {Route, Routes, Link} from 'react-router-dom'
import Home from './components/home';
import About from './components/about';

function App() {
  return (
    <div className="App">
      <header>
        
      </header>
      <Routes>
        <Route path= '/' element ={ <Home />} />
        <Route path ='about' element = { <div> Hallo</div>} />
      </Routes>
    </div>
  );
}

export default App;
