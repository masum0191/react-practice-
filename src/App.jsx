
import { useRef } from 'react';
const App = () => {
let myHeadline=useRef();
const changehead=()=>{
    myHeadline.current.src="https://picsum.photos/200/300";
    myHeadline.current.style.border="2px solid red";
    myHeadline.current.style.borderRadius="10px";
    myHeadline.current.setAttribute('height','100');
    myHeadline.current.setAttribute('width','100');
  }

  return (
    <div>
    <img src="https://picsum.photos/200/300" alt="Random" ref={myHeadline} />
    <button onClick={changehead}>Click Me</button>
    </div>
  );
};

export default App;

  


