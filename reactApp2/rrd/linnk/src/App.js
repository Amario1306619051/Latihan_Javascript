import './App.css';
import {Routes, Route, Link} from 'react-router-dom'
import Home from './component/home';
import About from './component/about';

function App() {
  return (
    <div className="App">
      <div className='keren'>
        <Link classname='tautan' to='/'> Home</Link>
        <Link classname='tautan' to='about'>About</Link>
      </div>
      <Routes>
        <Route path='/' element= { <Home />}/>
        <Route path='about' element={ <About />}/>
      </Routes>
    </div>
  );
}

export default App;
