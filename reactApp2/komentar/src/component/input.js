import React from 'react'
import {useState} from 'react'
import './input.css'
import Kolom from './kolom'

function Masuk() {

    const [nameValue, setNameValue] = useState('')
    const [komen, setKomen] = useState('')
    const [awal,setAwal] = useState([])
    const [suka, setSuka] = useState(0)
    const [gasuka, setGasuka] = useState(0)


    const Harapan = () => {
        setAwal([...awal, {
            id : awal.length,
            Komen: komen,
            Nama: nameValue,
            Suka: suka,
            Gasuka: gasuka,
            setSuka: setSuka,
            setGasuka: setGasuka
        }])
    }

  return (
    <div>
        <Kolom Nilai={awal} />

        <h3>Nama : </h3>
        <input
          className='komentar'
          type="text"
          value={nameValue}
          onChange={(e) => setNameValue(e.target.value)}
        />
        <h3>Komentar : </h3>
        <input
          className='komentar1'
          type="text"
          value={komen}
          onChange={(e) => setKomen(e.target.value)}
        />

        <div>
            <button onClick={Harapan}>Post Komentar</button>
        </div>
    </div>
  )
}

export default Masuk