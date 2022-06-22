import React, {useState} from 'react'

function Kolom({Nilai}) {
    const [sukaValue ,setSukaValue] = useState(0)
    const [gasukaValue ,setGasukaValue ] = useState(0)

    console.log(Nilai)

  return (
    <div>
    {
        Nilai.map(pr => 
            <div key={pr.id}>
                <div >
                <h3 >{pr.Nama}</h3>
                <h4>{pr.Komen}</h4>
                <button onClick={() => pr.setSuka(pr.Suka + 1)}> 👍  </button>
                <button >  👎 </button>
                <p> suka: {pr.Suka}, gasuka: {pr.Gasuka}</p>
                </div>
            </div>
        )
    }
    </div>
  )
}

export default Kolom