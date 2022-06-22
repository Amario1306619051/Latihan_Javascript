import './App.css';
import {Routes, Route, Link} from 'react-router-dom'
import Home from './components/home';
import About from './components/about';
import Order from './components/order';

function App() {
  return (
    <div>
      <ul>
        <li><Link to='/'> Home</Link></li>
        <li><Link to='about'> About</Link></li>

      </ul>
      <div>
      <Routes>
        <Route path='/' element= { <Home />}/>
        <Route path='about' element={ <About />}/>
        <Route path='order' element={ <Order />}/>
      </Routes>
      </div>
    </div>
  );
}

export default App;
