import React, {useState, useEffect } from 'react'
import axios from 'axios'


function Aaxios() {

    const [datak,setDatak] = useState(0)

    const getData = async () => {
        try{
            const res = await axios.get('https://jsonplaceholder.typicode.com/posts')
            setDatak(res.data)
        } catch (error){
            alert(error.message)
        }
        console.log(datak);
    }
    useEffect(() => {
        getData()
    })
    
  return (
    <div>
        {
            datak.map(pr =>
                <div key={pr.id}>
                    <h2>{pr.id}</h2>
                    <h2>{pr.title}</h2>
                </div>
            )
        }
    </div>
  )
}

export default Aaxios