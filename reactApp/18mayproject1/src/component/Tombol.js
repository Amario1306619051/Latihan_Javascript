import React, {useState} from 'react'
import './Tombol.css'
import Satu from './satu'

function Tombol() {
    const [musim,setMusim] = useState('hujan')

  return (
    <div>
        <Satu cuaca={musim}/>
        <button className='merah' onClik = {() => setMusim({musim: 'hujan'})}> Musim dingin</button>
        <button className='biru' onClik = {() => setMusim({musim: 'kemarau'})}> Musim Panas</button>
    </div>
  )
}

export default Tombol