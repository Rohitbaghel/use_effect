import { TodoInput } from './components/TodoInput';
import { Time } from './components/Time';
import './App.css';
import { useState } from 'react';

function App() {
  const [show,setShow] = useState(false)
  return (
    <div className="App" >
      {/* <TodoInput/> */}
      {show ? <Time /> : null}
      <button onClick={() => { setShow(!show) }}>{show ? "hide" : "show" }</button> 
    </div>
  );
}

export default App;
