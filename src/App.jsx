
import { useRef, useState } from 'react';
const App = () => {
  const [number, changeNumber] = useState(0);
  const incrementNumber = () => {
    changeNumber(number - 1);
  }
  return (
    <div>
      <h1>Fetch API Data and Display on Button Click</h1>
      <p>Number: {number}</p>
      <button onClick={incrementNumber}>Increment</button>
    </div>
  );
};

export default App;

  


