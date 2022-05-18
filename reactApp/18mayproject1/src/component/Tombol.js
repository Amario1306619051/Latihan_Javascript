import React, {useState} from 'react'
import './Tombol.css'
import Satu from './satu'

function Tombol() {
    const [musim,setMusim] = useState('kemarau')

    console.log(musim)

  return (
    <div>
        <Satu cuaca={musim}/>
        <button className='merah' onClick = {() => setMusim({musim: 'hujan'})}> Musim dingin</button>
        <button className='biru' onClick = {() => setMusim({musim: 'kemarau'})}> Musim Panas</button>
    </div>

  )
}

export default Tombol