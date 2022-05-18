import './App.css';

function HaDua ({nama,umur}) {
  return(
    <div>
      <h3> Nama kamu {nama} dan umurnya {umur} tahun</h3>
    </div>
  )
}

function HaSatu (props) {
  return(
    <div>
      <h2> Hello {props.name} </h2>
      <HaDua nama={props.name} umur='20' />
    </div>
  )
}

function App() {
  return (
    <div className="App">
      <h1> Hello visitors</h1>
      <HaSatu name = 'Amario' />
    </div>
  );
}

export default App;
