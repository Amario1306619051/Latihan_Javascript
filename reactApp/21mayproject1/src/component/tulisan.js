import React,{useContext} from 'react'
import './tulisan.css'
import {AlexanderArnold} from './tombol'


function Tulisan() {

    const JurgenKlopp = React.useContext(AlexanderArnold)
  return (
    <div>
        <h2 className={JurgenKlopp}>Ini merupakan tema {JurgenKlopp}</h2>
    </div>
  )
}

export default Tulisan