
import React, { useState } from 'react';

const App = () => {
  const [myObject, setMyObject] = useState({ name: "John", age: 30 });
  const updateObject = () => {
    setMyObject((prevObject) => ({
      ...prevObject,
      name: 'Mary',
      age: 25
    }));
  };

  return (
    <div>
      <h1>Hello, World!</h1>
      <p>Name: {myObject.name}</p>
      <p>Age: {myObject.age}</p>
      <button onClick={updateObject}>Update Object</button>
    </div>
  );
};

export default App;

  


