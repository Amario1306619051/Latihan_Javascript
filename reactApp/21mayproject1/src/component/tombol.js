import React, {useState, useContext} from 'react'
import Tulisan from './tulisan'

 export const AlexanderArnold = React.createContext()

function Tombol() {

    const [tema,setTema] = useState({Theme: 'panas'})

    const Ubah = () => {
        if (tema.Theme === 'panas'){
            setTema(
                {
                    Theme: 'dingin'
                }
            )
        }else{
            setTema(
                {
                    Theme: 'panas'
                }
            )
        }
    }
  return (
    <div>
        <AlexanderArnold.Provider value = {tema.Theme}>
            <Tulisan />
            <button onClick = {() => Ubah()}> Klik ini untuk mengubah tema</button>
        </AlexanderArnold.Provider>
    </div>
  )
}

export default Tombol