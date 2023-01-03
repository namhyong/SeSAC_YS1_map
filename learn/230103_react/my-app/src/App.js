import logo from './logo.svg';
import './App.css';

function App() {
  const hellostr = "Hello, first exercise"
  const inlineStyle = { marginTop: "32px", backgroundColor:"skyblue"}
  
  function printConsole(){
    console.log('콘손 출력')
  }
  const fontStyle = {backgroundColor:"orange"}
  return (
    <div className="App">
     <div style ={inlineStyle} onClick={() =>{
     alert("클릭됨")
     }
     }> {hellostr}</div>
    </div>
  );
}

export default App;
