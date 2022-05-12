import React, {useState} from 'react'

function button() {

    const [count, setCount] = useState(0)

    const IncrementFive = () =>{
        for(let i = 0; i == 5; i ++){
            setCount(prevCount => prevCount + 1)
        }
    }

  return (
    <div>
        <h1> Jumlah angka {count} </h1>
        <button onClick={setCount(count + 1)}> Tambah </button>
        <button onClick={setCount(count - 1 )}> Kurang </button>
        <button onClick={setCount(count = 0)}> Reset </button>
    </div>
  )
}
