import React, {useContext} from 'react'
import {Sembarangan} from './tampilan'

function Tombol() {
  
    const user = React.useContext(Sembarangan).theme
    const tata = React.useContext(Sembarangan).setTheme

    let magicNP
    if (user === 'panas'){
      magic = 'dingin'
    }else{
      magic = 'panas'
    }
    console.log(tata)
  return (
    <div>
        <button> Ganti tema </button>
    </div>
  )
}

export default Tombol