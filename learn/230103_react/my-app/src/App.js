import logo from './logo.svg';
import './App.css';

import Picture from './components/Picture';
import Btn from './components/Btn';

function App() {

// function MainHeader(){  //파일로 따로 쓰지 않고 같은 내부에 정의 해서 component 사용 가능
//   return(
//     <h1> 함수형 내부 정의</h1>
//   )
// }

  return (
    <div className="App">
      <Picture />
      <Btn />
    </div>
  );
}

export default App;
