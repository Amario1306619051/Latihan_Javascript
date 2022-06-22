import React from 'react'
import {useNavigate} from 'react-router-dom'
import Order from './order'

function Home() {
    const navigate = useNavigate()
  return (
    <div>
        <h1>This is Home page</h1>
        <button onClick={() => navigate('order')}> Order Status</button>
    </div>
  )
}

export default Home