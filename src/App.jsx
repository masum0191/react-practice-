
import React, { use, useEffect } from 'react';
import { useState } from 'react';

const App = () => {
const[data,setData]=useState();

useEffect(() => {
  fetch('https://jsonplaceholder.typicode.com/todos/1')
    .then(res=>res.json()
    .then(json=>setData(json)))
}, []);



  return (
    <div>
      {JSON.stringify(data)}
    </div>
  );
};

export default App;

  


