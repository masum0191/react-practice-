
import { useRef } from 'react';
const App = () => {
let firstName,lastName=useRef();



const changehead=()=>{

   let fName=firstName.value;
   let lName=lastName.value;
   alert(`First Name is ${fName} and Last Name is ${lName}`);


  }

  return (
    <div>
      <input type="text"  ref={(a)=>firstName=a} />
      <input type="text"  ref={(a)=>lastName=a} />
    <button onClick={changehead}>Click Me</button>
    </div>
  );
};

export default App;

  


