import './App.css';

const ParentComponent = function (props) {
  const someText = "FooBar";
  return (
     <FirstComponent content={someText} />
  );
 }
 const FirstComponent = (props) => {
  return (
     <div>
         <p> {props.content} </p>
     </div>
  );
 }
function App() {
  return (
    <div className="App">
      <ParentComponent />
    </div>
  );
}

export default App;
