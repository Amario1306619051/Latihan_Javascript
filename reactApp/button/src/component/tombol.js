import React, {useState} from 'react'

function Tombol() {
    const [tema,setTema] = useState('panas')
  return (
    <div>
        <button> Klik disini untuk ganti tema</button>
        <h4>Tema saat ini {tema}</h4>
    </div>
  )
}

export default Tombol