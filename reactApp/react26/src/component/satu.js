import React from 'react'

function Satu() {
    const Daftar = [
        {
            nama : 'Amario',
            prodi : 'Fisika',
            angkatan: '2019'
        },
        {
            nama : 'Bagas',
            prodi : 'Akutansi',
            angkatan: '2019'
        },
        {
            nama : 'Sadio',
            prodi: 'Liverpool',
            angkatan : 'unknown'
        }
    ]

    const Hasil = Daftar.map(
        x => 
        <p> Hallo saya {x.nama} latar belakang 
        pekerjaan saya {x.prodi} dan saya angkatan
         {x.angkatan}</p>
    )
  return (
    <div> 
        {Hasil}
    </div>
  )
}

export default Satu