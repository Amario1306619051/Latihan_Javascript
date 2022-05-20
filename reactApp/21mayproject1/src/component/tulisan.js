import React from 'react'
import Tombol from './tombol'
import './tulisan.css'

const AlexanderArnold = React.createContext()

function Tulisan() {
  return (
    <div>
        <h2 className='panas'>Ini merupakan tema panas</h2>
        <Tombol />
    </div>
  )
}

export default Tulisan