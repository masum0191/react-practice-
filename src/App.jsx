
import { useRef } from 'react';
const App = () => {

const number=useRef(0);

const changehead=()=>{
number.current++;
console.log(number.current);


  }

  return (
    <div>
      <h1 className='text-primary'>Hello World</h1>
    <button onClick={changehead}>Click Me</button>
    </div>
  );
};

export default App;

  


