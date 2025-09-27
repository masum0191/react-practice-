

const App = () => {
  let status = true;
  return (
    <div>
      <h1>Login Status</h1>
      {(()=>{
        if (status ==true){
        return <button>logout</button>
        }else{
          return <button>login</button>
        }

      })()}
    </div>
   
  );
};

export default App;

  


