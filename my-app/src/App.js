import logo from './logo.svg';
import './App.css';

function App() {
  const str = "Hello, react world"
  
  function amazingJSX(){
    alert( 'amazingJSX')
  }

  const fontStyle = {backgroundColor:"orange"}
  const test="test"
  return (
    <div className="App">
      <div style={fontStyle}>인라인 스타일</div>
    </div>
  );
}

export default App;
