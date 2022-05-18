import './App.css';
import React from 'react'
const AlexanderArnold = React.createContext()
const AndrewRobertson = React.createContext()

function ComponentC (){

  const JurgenKlopp = React.useContext(AlexanderArnold)
  const AlisonBekker = React.useContext(AndrewRobertson)
  return(
    <div>
      {JurgenKlopp} - {AlisonBekker}
    </div>
  )
}

function ComponentB (){
  return(
    <ComponentC />
  )
}

function ComponentA (){
 return(
   <ComponentB />
 )
}

function App() {
  return (
    <div className="App">
      <h1>Hello visitors</h1>
      <AlexanderArnold.Provider value={'AMARIO'} >
        <AndrewRobertson.Provider value={'Fisika'}>
        <ComponentA />
        </AndrewRobertson.Provider>
      </AlexanderArnold.Provider>
    </div>
  );
}
export default App;
