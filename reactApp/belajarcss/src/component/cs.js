import React from 'react'
import './cs.css'

function CS(props) {
    let AlexanderArnold
    if(props.maunya == true){
        AlexanderArnold = 'kelasSatu'
    }else{
        AlexanderArnold = 'kelasDua'
    }
  return (
    <div>
        <h2>Supersekali</h2>
        <h1 className={AlexanderArnold}>Hallo pengguna</h1>
    </div>
  )
}

export default CS