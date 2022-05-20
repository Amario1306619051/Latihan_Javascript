import React, {useState, useContext} from 'react'
import './tampilan.css'
import Tombol from './tombol'


export const Sembarangan = React.createContext()

function Tampilan() {

    const [tema, setTema] = useState('dingin')
  return (
    <div>
        <Sembarangan.Provider value={
            {
                theme: tema,
                setTheme: setTema 
            }}>
            <h2 className={tema}> Ini merupakan tema {tema}</h2>
            <Tombol />
        </Sembarangan.Provider>
    </div>
  )
}

export default Tampilan