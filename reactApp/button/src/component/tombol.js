import React, {useState} from 'react'

function Tombol() {
    const [tema,setTema] = useState({Theme: 'panas'})
    
    const Gantian = () => {
        if(tema.Theme === 'panas'){
            setTema({Theme: 'dingin'})
        }else{
            setTema({Theme: 'panas'})
        }
    }

  return (
    <div>
        <button onClick={() => Gantian()}> Klik disini untuk ganti tema</button>
        <h4>Tema saat ini : {tema.Theme}</h4>
    </div>
  )
}

export default Tombol