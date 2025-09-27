
import { useRef } from 'react';
const App = () => {
let myHeadline=useRef();
const changehead=()=>{
  myHeadline.innerText="Hello World"
}

  return (
    <div>
    <h1 ref={(h1)=>myHeadline=h1}></h1>
    <button onClick={changehead}>Click Me</button>
    </div>
  );
};

export default App;

  


