import React from 'react'
import { useState } from 'react'
import { useText } from './text'

function Upload() {

    const {name, jurusan, bio, setName, setJurusan, setBio} = useText()
    const [nameValue, setNameValue] = useState(name)
    const [jurusanValue, setJurusanValue] = useState(jurusan)
    const [bioValue, setBioValue] = useState(bio)

    const Handle = () => {
        setName(nameValue)
        setJurusan(jurusanValue)
        setBio(bioValue)
    }
    console.log(setName)
  return (
    <div>
        <input
          type="text"
          value={nameValue}
          onChange={(e) => setNameValue(e.target.value)}
        />
        <input
          type="text"
          value={jurusanValue}
          onChange={(e) => setJurusanValue(jurusanValue)}
        />
        <input
          type="text"
          value= {bioValue}
          onChange={(e) => setBioValue(e.target.value)}
        />
        <button onClick={Handle}> Klik me</button>
    </div>
  )
}

export default Upload