import React, {useState} from 'react'

function List() {
    const [awal,setAwal] = useState([{id: '',value: ''}])
    const [akhir,setAkhir] = useState('')

    const Harapan = () => {
        setAwal([...awal, {
            id : awal.length,
            value: akhir
        }])
    }
    console.log(akhir)
    console.log(akhir)
  return (
    <div>
        {
            awal.map(pr => 
                <h1 key={pr.id}>{pr.value}</h1>
            )
        }
        <input
          type="text"
          value={akhir}
          onChange={(e) => setAkhir(e.target.value)}
        />
        <button onClick={Harapan}> Klik Ini yak</button>
    </div>
  )
}

export default List