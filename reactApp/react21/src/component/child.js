import React from 'react'

function child(props) {
  return (
    <div>
        <button onClick={props.gH}>Greet Parent</button>
    </div>
  )
}

export default child