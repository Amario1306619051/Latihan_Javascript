import './App.css';
import axios from 'axios'
import {useState, useEffect} from 'react'

function App() {
  const [awal, setAwal] = useState()
  const [akhir,setAkhir]  = useState(2)

  const Kurang1 = () => {
    setAkhir(1)
  }

  const Kurang2 = () => {
    setAkhir(2)
  }

  const Kurang3 = () => {
    setAkhir(3)
  }

  const Kurang4 = () => {
    setAkhir(4)
  }

  useEffect(() => {
    axios
      .get('https://jsonplaceholder.typicode.com/posts/' + akhir)
      .then( res => {
        setAwal(res.data.body)
      })
    }
  )
  return (
    <div className="App">
      <header className="App-header">
        Hello Visitors
      </header>
      <h3 className='super'>{awal}</h3>
      <button onClick={Kurang1} className='tombol'> Button 1 </button>
      <button onClick={Kurang2} className='tombol'> Button 2 </button>
      <button onClick={Kurang3} className='tombol'> Button 3 </button>
      <button onClick={Kurang4} className='tombol'> Button 4 </button>
    </div>
  );
}

export default App;
