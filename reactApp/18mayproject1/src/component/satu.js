import React from 'react'
import './satu.css'

export default function Satu(props) {
  const asix = props.cuaca
  console.log(asix)
  return (
    <div>
        <h1 className={asix.musim}>Musim {asix.musim}</h1>
    </div>
  )
}
