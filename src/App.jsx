
import React, { use, useEffect } from 'react';
import { useState } from 'react';

const App = () => {
const[data,setData]=useState();

useEffect(() => {
  (async()=>{
    let response=await fetch('https://appsdevelopmentfirm.agency/admin/site/api/airports')
    let json=await response.json()
    setData(json)
  })
  ()
}, []);



  return (
    <div>
      {JSON.stringify(data)}
    </div>
  );
};

export default App;

  


