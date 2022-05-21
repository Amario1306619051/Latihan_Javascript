import React, {useContext} from 'react'
import './tulisan.css'
import {AlexanderArnold} from './tombol'

function Tulisan() {
    const JurgenKlopp = React.useContext(AlexanderArnold)

    let mesaage
    if (JurgenKlopp === 'Amario'){
        return(
            <p className='tulisan'>
                Ini merupakan laman dari {JurgenKlopp}
            </p>
        )
    }else if (JurgenKlopp === 'Pridana'){
        return(
            <p className='tulisan'>
                Ini merupakan laman dari {JurgenKlopp}
            </p>
        )
    }else{
        return(
            <p className='tulisan'>
                Ini merupakan laman dari {JurgenKlopp}
            </p>
        )   
    }
  return (
    <div>
        <h2>Biodata</h2>
        {mesaage}
    </div>
  )
}

export default Tulisan