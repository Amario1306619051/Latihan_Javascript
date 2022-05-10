import './App.css';
import haaland from './haaland.jpeg';

import React from 'react'

export const  News1 = () => {
  return (
    <div className='News1'>
      <h2>Erling Halaand ke manchester city !!</h2>
      <p>Menurut kabar terbaru, penyerang Borussia Dortmund, Erling Haaland, 
        akan bergabung dengan Manchester City pada musim panas 2022.
      </p>
      <p>Raksasa Liga Inggris itu siap untuk mengaktifkan klausul pelepasan sang bomber 
        sebesar 63 juta pounds atau setara Rp1,1 triliun.
      </p>
      <p>
        Di musim panas 2022 ini, klausul rilis Haaland akan aktif. 
        Alhasil banyak klub papan atas Eropa berlomba-lomba untuk 
        menggaet striker Timnas Norwegia tersebut.
      </p>
      <p>
        Manchester City baru-baru ini resmi mengumumkan 
        bahwa mereka pemenang transfer Haaland. Mereka telah 
        mengunci transfer pemain berusia 22 tahun tersebut.
      </p>
      <p>
      Melalui akun twitter resmi mereka, Manchester City sudah mengonfirmasi bahwa
       mereka telah mencapai kesepakatan dengan Dortmund untuk transfer Haaland.
      </p>
    </div>
  )
}


export const GambarHaaland = () => {
  return (
    <div>
      <img class='haaland' src={haaland} />
    </div>
  )
}




function App() {
  return (
    <div className="App">
      <h1>Breaking news</h1>
      <div className='Blok1'>
        <News1 />
        <GambarHaaland />
      </div>
    </div>
  );
}

export default App;
