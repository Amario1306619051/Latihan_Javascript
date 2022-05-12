import React, {useState} from 'react'

export default function button() {

    const [count,setCount] = useState(0)

    Tambah = () =>{
        setCount(count + 1)
    }

    Kurang = () =>{
        setCount(count - 1)
    }

    IncrementFive = () =>{
        for(let i = 0; i == 6; i ++){
            setCount(prevCount => prevCount + 1)
        }
    }

    Reset = () => {
        setCount(0)
    }

  return (
    <div>
        <h1> Jumlah angka {count} </h1>
        <button onClick={Tambah}> Tambah </button>
        <button onClick={Kurang}> Kurang </button>
        <button onClick={IncrementFive}> Tambah 5</button>
        <button onClick={Reset}> Reset </button>
    </div>
  )
}
