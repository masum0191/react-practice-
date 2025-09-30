
import { useRef } from 'react';
const App = () => {
  const dataRef = useRef(null);
  let Ptagdata=useRef();
  const getData= async()=>{
    const response= await fetch('https://dummyjson.com/products');
    dataRef.current= await response.json();
  }
  const showData=()=>{
    Ptagdata.current.innerHTML=JSON.stringify(dataRef.current);
  }



  

  return (
    <div>
      <h1>Fetch API Data and Display on Button Click</h1>
      
      {/* all data show here */}
      <pre ref={Ptagdata}></pre>
      {/* all data show here */}
      <hr/>
      <button onClick={getData}>Get Data</button>
      <button onClick={showData}>Show Data</button>
    </div>
  );
};

export default App;

  


