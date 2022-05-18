import './App.css';
import React , {useContext} from 'react'

const AlexanderArnold = React.createContext()
const AndrewRobertson = React.createContext()

function ComponentC (){
  return(
    <AlexanderArnold.Consumer>
      {
        user => {
          return (
            <AndrewRobertson.Consumer>
              { user1 => {
                  return (
                    <div>
                      <h2>Hello {user} from {user1}</h2>
                    </div>
                  )
                }
              }
            </AndrewRobertson.Consumer>
        )}
      }
    </AlexanderArnold.Consumer>
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
