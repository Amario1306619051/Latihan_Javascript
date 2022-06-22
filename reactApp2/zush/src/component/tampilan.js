import React from 'react'
import { useText } from './text' 

function Tampilan() {

    const {name, jurusan, bio} = useText()
  return (
    <div>
        <h1> BIODATA </h1>
        <hr/>
        <h3> Nama: {name} </h3>
        <h3> Jurusan: {jurusan}</h3>
        <h4> Bio: {bio}</h4>
    </div>
  )
}

export default Tampilan