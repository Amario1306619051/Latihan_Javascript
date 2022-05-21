import React, {useState, useContext} from 'react'
import Tulisan from './tulisan'

export const AlexanderArnold = React.createContext()
function Tombol() {

    const [bio,setBio] = useState({profile : 'Amario'})

  return (
    <div>
        <AlexanderArnold.Provider value={bio.profile}>
            <Tulisan />
            <button onClick={() => setBio({profile: 'Amario'})}> Amario </button>
            <button onClick={() => setBio({profile: 'Pridana'})}> Pridana </button>
            <button onClick={() => setBio({profile: 'Muhlis'})}> Muhlis</button>
        </AlexanderArnold.Provider>
    </div>
  )
}

export default Tombol