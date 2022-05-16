import React from 'react'

function Eksfis () {
    const names = ['Amario','Muhlis','Pridana']
    return (
    <div>
        {
           names.map(name => <h2>{name}</h2>) 
        }
    </div>
    ) 
}

export default Eksfis