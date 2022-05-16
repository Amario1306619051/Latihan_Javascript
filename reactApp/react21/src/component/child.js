import React from 'react'

function child(props) {
  return (
    <div>
        <button onClick={() => props.gH('Muhlis')}>Greet Parent</button>
    </div>
  )
}

export default child