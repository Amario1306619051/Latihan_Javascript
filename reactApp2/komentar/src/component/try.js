import React,{useState} from 'react'
import './try.css'

function Try() {
    const [depan,setDepan] = useState(0)

  return (
    <div className='but' onClick={() => setDepan(depan + 1)}>
        {depan}
    </div>
  )
}

export default Try