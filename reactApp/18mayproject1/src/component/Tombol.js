import React, {useState} from 'react'
import './Tombol.css'
import Satu from './satu'

function Tombol() {
    const [musim,setMusim] = useState('kemarau')
  return (
    <div>
        <Satu />
        <button className='merah'> Musim dingin</button>
        <button className='biru'> Musim Panas</button>
    </div>
  )
}

export default Tombol