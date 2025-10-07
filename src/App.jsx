
import React, { useState } from 'react';

const App = () => {
 const [list,setlist]=useState([]);
 const [item,setitem]=useState("");
 const AddToList= ()=>{
    list.push(item)
    setlist([...list])
 }
 const removeItem=(index)=>{
  list.splice(index,1)
  setlist([...list])

 }

  return (
    <div>
      <h1>Hello, World!</h1>
      <table>
        <tbody>
          {
            list.length!==0?(
              list.map((item,index)=>{
                return(
                  <tr key={index}>
                    <td>
                      {item}
                      <button onClick={()=>removeItem(index)} style={{marginLeft:"10px"}}>remove</button>
                    </td>
                  </tr>
                )
              })
            ):(
              <tr><td>No items</td></tr>
            )
          }
        </tbody>
      </table>
      
      <input type="text" onChange={(e)=>setitem(e.target.value)} placeholder='add item'/>
      <button onClick={AddToList}>add</button>
    </div>
  );
};

export default App;

  


